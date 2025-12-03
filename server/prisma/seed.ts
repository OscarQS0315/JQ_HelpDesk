import { PrismaClient } from '../generated/prisma';


// Datos base
import { slas } from "./seeds/sla";
import { users } from "./seeds/users";
import { specialities } from "./seeds/specialities";
import { technicians } from "./seeds/technicians";
import { ticketCategories } from "./seeds/ticketCategories";
import { categoryEtiquettes } from "./seeds/categoryEtiquettes";
import { autoTriageRules } from "./seeds/autoTriageRules";
import { tickets } from "./seeds/tickets";
import { ticketImages } from "./seeds/ticketImages";
import { ticketHistory } from "./seeds/ticketHistories";

import { notifications } from "./seeds/notifications";
import { ticketValorations } from "./seeds/ticketValorations";

const prisma = new PrismaClient();

const main = async () => {
  try {
    // Datos base
    await prisma.sLA.createMany({ data: slas });
    await prisma.user.createMany({ data: users });
    await prisma.specialityArea.createMany({ data: specialities });
    await prisma.userTechnician.createMany({ data: technicians });
    await prisma.ticketCategory.createMany({ data: ticketCategories });
    await prisma.categoryEtiquette.createMany({ data: categoryEtiquettes });
    await prisma.autoTriageRule.createMany({ data: autoTriageRules });

    // Relaciones: TicketCategory con SpecialityArea y CategoryEtiquette
    function getRandomIds(total: number): { id: number }[] {
      const count = Math.floor(Math.random() * 2) + 2;
      const ids = Array.from({ length: total }, (_, i) => i + 1);
      const shuffled = ids.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count).map(id => ({ id }));
    }

    for (const category of ticketCategories) {
      await prisma.ticketCategory.update({
        where: { name: category.name },
        data: {
          specialities: {
            connect: getRandomIds(20),
          },
          categoryEtiquettes: {
            connect: getRandomIds(10),
          },
        },
      });
    }


    // Relaciones: UserTechnician con SpecialityArea
    function getRandomSpecialities(): { id: number }[] {
      const count = Math.floor(Math.random() * 2) + 2;
      const ids = Array.from({ length: specialities.length }, (_, i) => i + 1);
      const shuffled = ids.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count).map(id => ({ id }));
    }

    for (const technician of technicians) {
      await prisma.userTechnician.update({
        where: { userId: technician.userId },
        data: {
          specialities: {
            connect: getRandomSpecialities(),
          },
        },
      });
    }



    // Tickets con relaciones
    for (const ticket of tickets) {
      const {
        automaticTriageRuleId,
        userId,
        technicianId,
        ticketCategoryId,
        ...rest
      } = ticket;

      await prisma.ticket.create({
        data: {
          ...rest,
          user: { connect: { id: userId } },
          technician: technicianId ? { connect: { id: technicianId } } : undefined,
          ticketCategory: { connect: { id: ticketCategoryId } },
          automaticTriageRule: automaticTriageRuleId
            ? { connect: { id: automaticTriageRuleId } }
            : undefined,
        },
      });
    }




    // TicketHistory + Observations
    for (const history of ticketHistory) {
      const { ticketId, changedBy, status, changedAt, observation } = history;

      await prisma.ticketHistory.create({
        data: {
          status,
          changedAt,
          observation,
          ticket: { connect: { id: ticketId } },
          user: { connect: { id: changedBy } },
        },
      });
    }


    for (const image of ticketImages) {
      const { ticketId, ticketHistoryId, imageUrl } = image;

      await prisma.ticketImage.create({
        data: {
          imageUrl,
          ticket: ticketId ? { connect: { id: ticketId } } : undefined,
          ticketHistory: ticketHistoryId
            ? { connect: { id: ticketHistoryId } }
            : undefined,
        },
      });
    }



    for (const notification of notifications) {
      const { title, toUserId, fromUserId, ticketId, message, isRead, type } = notification;

      await prisma.notification.create({
        data: {
          title,
          message,
          isRead,
          type,
          toUser: { connect: { id: toUserId } },
          fromUser: fromUserId ? { connect: { id: fromUserId } } : undefined,
          ticket: ticketId ? { connect: { id: ticketId } } : undefined,
        },
      });
    }



    // TicketValorations
    for (const valoration of ticketValorations) {
      const { ticketId, rating, comments } = valoration;

      await prisma.ticketValoration.create({
        data: {
          rating,
          comments,
          ticket: { connect: { id: ticketId } },
        },
      });
    }


    console.log("Seed completado correctamente.");
  } catch (error) {
    console.error("Error durante el seed:", error);
    throw error;
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

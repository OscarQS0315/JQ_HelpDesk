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
import { ticketHistories } from "./seeds/ticketHistories";
import { ticketHistoryObservations } from "./seeds/ticketHistoryObservations";
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
    for (const category of ticketCategories) {
      await prisma.ticketCategory.update({
        where: { name: category.name },
        data: {
          specialities: {
            connect: [{ id: 1 }, { id: 2 }],
          },
          categoryEtiquettes: {
            connect: [{ id: 1 }, { id: 3 }],
          },
        },
      });
    }

    // Relaciones: UserTechnician con SpecialityArea
    for (const [i, technician] of technicians.entries()) {
      await prisma.userTechnician.update({
        where: { userId: technician.userId },
        data: {
          specialities: {
            connect: [{ id: (i % specialities.length) + 1 }],
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
    for (const history of ticketHistories) {
      const { ticketId, changedBy, status } = history;

      const created = await prisma.ticketHistory.create({
        data: {
          status,
          ticket: { connect: { id: ticketId } },
          user: { connect: { id: changedBy } },
        },
      });

      const observation = ticketHistoryObservations.find(o => o.ticketHistoryId === created.id);
      if (observation) {
        await prisma.ticketHistoryObservation.create({
          data: {
            observation: observation.observation,
            ticketHistory: { connect: { id: created.id } },
          },
        });
      }
    }
    
    for (const image of ticketImages) {
      const {
        ticketId,
        ticketHistoryObservationId,
        imageUrl,
      } = image;

      await prisma.ticketImage.create({
        data: {
          imageUrl,
          ticket: ticketId ? { connect: { id: ticketId } } : undefined,
          ticketHistoryObservation: ticketHistoryObservationId
            ? { connect: { id: ticketHistoryObservationId } }
            : undefined,
        },
      });
    }

    // Notifications
    for (const notification of notifications) {
      const { userId, ticketId, message, isRead } = notification;

      await prisma.notification.create({
        data: {
          message,
          isRead,
          user: { connect: { id: userId } },
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

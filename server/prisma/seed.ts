import {slas} from "./seeds/sla";
import {users} from "./seeds/users";
import { specialities } from "./seeds/specialities";
import { technicians } from "./seeds/technicians";
import { ticketCategories } from "./seeds/ticketCategories";

import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();
const main = async () => {
  try {
    
  } catch (error) {
    throw error;
  }
};
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })

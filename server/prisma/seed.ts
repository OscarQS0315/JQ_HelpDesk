import { generos } from "./seeds/generos";
import { usuarios } from "./seeds/usuarios";
import { plataformas } from "./seeds/plataformas";
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

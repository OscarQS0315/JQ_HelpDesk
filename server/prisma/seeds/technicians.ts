import { E_TechnicianStatus } from "../../generated/prisma";


export const technicians = [
  {
    userId: 6, // María Fernández
    status: E_TechnicianStatus.AVAILABLE,
    workload: 1,
  },
  {
    userId: 7, // Jorge Alvarado
    status: E_TechnicianStatus.BUSY,
    workload: 3,
  },
  {
    userId: 8, // Sofía Martínez
    status: E_TechnicianStatus.AVAILABLE,
    workload: 2,
  },
  {
    userId: 9, // Luis Castro
    status: E_TechnicianStatus.BUSY,
    workload: 4,
  },
  {
    userId: 10, // Andrea Vargas
    status: E_TechnicianStatus.AVAILABLE,
    workload: 0,
  },
];



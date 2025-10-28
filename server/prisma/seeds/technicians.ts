import { E_TechnicianStatus } from "../../generated/prisma";


export const technicians = [
  {
    userId: 11, 
    status: E_TechnicianStatus.AVAILABLE,
    workload: 1,
  },
  {
    userId: 12, 
    status: E_TechnicianStatus.BUSY,
    workload: 3,
  },
  {
    userId: 13, 
    status: E_TechnicianStatus.AVAILABLE,
    workload: 2,
  },
  {
    userId: 14, 
    status: E_TechnicianStatus.BUSY,
    workload: 4,
  },
  {
    userId: 15, 
    status: E_TechnicianStatus.AVAILABLE,
    workload: 0,
  },
];



import { E_TicketPriority } from "../../generated/prisma";
import { E_TicketStatus } from "../../generated/prisma";
import { E_AssignedMethod } from "../../generated/prisma";
export const tickets = [
  { userId: 1, technicianId: 1, ticketCategoryId: 1, title: 'No puedo acceder al sistema', description: 'El sistema rechaza mis credenciales', priority: E_TicketPriority.HIGH, status: E_TicketStatus.ASSIGNED, assignedMethod: E_AssignedMethod.MANUAL, automaticTriageRuleId: 1 },
  { userId: 2, technicianId: 2, ticketCategoryId: 2, title: 'Pantalla azul al iniciar', description: 'La laptop muestra una pantalla azul al encender', priority: E_TicketPriority.MEDIUM, status: E_TicketStatus.IN_PROGRESS, assignedMethod: E_AssignedMethod.AUTOMATIC, automaticTriageRuleId: 2 },
  { userId: 3, technicianId: 3, ticketCategoryId: 3, title: 'Error en la impresora', description: 'No imprime aunque está conectada', priority: E_TicketPriority.LOW, status: E_TicketStatus.PENDING, assignedMethod: E_AssignedMethod.MANUAL },
  { userId: 4, technicianId: 1, ticketCategoryId: 1, title: 'Actualización fallida', description: 'El sistema no se actualiza correctamente', priority: E_TicketPriority.MEDIUM, status: E_TicketStatus.RESOLVED, assignedMethod: E_AssignedMethod.MANUAL },
  { userId: 5, technicianId: 2, ticketCategoryId: 2, title: 'Problema de red', description: 'No hay conexión a internet', priority: E_TicketPriority.HIGH, status: E_TicketStatus.IN_PROGRESS, assignedMethod: E_AssignedMethod.AUTOMATIC },
  { userId: 6, technicianId: 3, ticketCategoryId: 3, title: 'Software no responde', description: 'La aplicación se congela al abrir', priority: E_TicketPriority.MEDIUM, status: E_TicketStatus.ASSIGNED, assignedMethod: E_AssignedMethod.MANUAL, automaticTriageRuleId: 3 },
];

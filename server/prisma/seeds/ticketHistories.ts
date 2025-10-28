import { E_TicketStatus } from "../../generated/prisma";
export const ticketHistory = [
  { id: 1, ticketId: 1, status: E_TicketStatus.ASSIGNED, changedBy: 11, changedAt: new Date('2025-10-12T09:30:00'), observation: 'Ticket asignado manualmente al técnico para revisión de red local.' },
  { id: 2, ticketId: 1, status: E_TicketStatus.IN_PROGRESS, changedBy: 11, changedAt: new Date('2025-10-13T10:00:00'), observation: 'El técnico inició diagnóstico de conectividad LAN.' },

  { id: 3, ticketId: 2, status: E_TicketStatus.ASSIGNED, changedBy: 12, changedAt: new Date('2025-09-28T10:00:00'), observation: 'Asignación automática para revisar problemas de correo electrónico.' },
  { id: 4, ticketId: 2, status: E_TicketStatus.IN_PROGRESS, changedBy: 12, changedAt: new Date('2025-09-28T15:00:00'), observation: 'Se comenzó análisis del servidor SMTP.' },
  { id: 5, ticketId: 2, status: E_TicketStatus.RESOLVED, changedBy: 12, changedAt: new Date('2025-09-29T11:00:00'), observation: 'Configuración ajustada y validación de envío completada.' },

  { id: 6, ticketId: 3, status: E_TicketStatus.ASSIGNED, changedBy: 13, changedAt: new Date('2025-10-05T08:00:00'), observation: 'Ticket asignado para revisión de hardware dañado.' },
  { id: 7, ticketId: 3, status: E_TicketStatus.IN_PROGRESS, changedBy: 13, changedAt: new Date('2025-10-05T12:00:00'), observation: 'Se inició inspección física de la pantalla.' },
  { id: 8, ticketId: 3, status: E_TicketStatus.RESOLVED, changedBy: 13, changedAt: new Date('2025-10-06T15:00:00'), observation: 'Pantalla reemplazada y funcionalidad verificada.' },
  { id: 9, ticketId: 3, status: E_TicketStatus.CLOSED, changedBy: 13, changedAt: new Date('2025-10-07T14:00:00'), observation: 'Ticket cerrado tras confirmación del usuario.' },

  { id: 10, ticketId: 4, status: E_TicketStatus.ASSIGNED, changedBy: 14, changedAt: new Date('2025-10-14T11:00:00'), observation: 'Asignación automática para revisar acceso remoto vía VPN.' },

  { id: 11, ticketId: 5, status: E_TicketStatus.ASSIGNED, changedBy: 15, changedAt: new Date('2025-09-30T09:00:00'), observation: 'Asignado para atender amenaza detectada por antivirus.' },
  { id: 12, ticketId: 5, status: E_TicketStatus.IN_PROGRESS, changedBy: 15, changedAt: new Date('2025-10-01T10:00:00'), observation: 'Análisis de malware en curso.' },
  { id: 13, ticketId: 5, status: E_TicketStatus.RESOLVED, changedBy: 15, changedAt: new Date('2025-10-02T10:00:00'), observation: 'Amenaza eliminada y sistema actualizado.' },
  { id: 14, ticketId: 5, status: E_TicketStatus.CLOSED, changedBy: 15, changedAt: new Date('2025-10-02T16:00:00'), observation: 'Ticket cerrado tras verificación de seguridad.' },

  { id: 15, ticketId: 8, status: E_TicketStatus.ASSIGNED, changedBy: 14, changedAt: new Date('2025-10-10T11:00:00'), observation: 'Asignado para investigar actividad sospechosa en antivirus.' },
  { id: 16, ticketId: 9, status: E_TicketStatus.ASSIGNED, changedBy: 15, changedAt: new Date('2025-10-11T10:00:00'), observation: 'Asignación automática para revisar acceso remoto bloqueado.' },

  { id: 17, ticketId: 10, status: E_TicketStatus.ASSIGNED, changedBy: 11, changedAt: new Date('2025-10-12T09:00:00'), observation: 'Asignado para revisar falla de teclado.' },
  { id: 18, ticketId: 10, status: E_TicketStatus.IN_PROGRESS, changedBy: 11, changedAt: new Date('2025-10-13T10:00:00'), observation: 'Se inició prueba con periféricos alternativos.' },

  { id: 19, ticketId: 11, status: E_TicketStatus.ASSIGNED, changedBy: 12, changedAt: new Date('2025-10-13T10:00:00'), observation: 'Asignación automática para revisar duplicación de correos.' },
  { id: 20, ticketId: 11, status: E_TicketStatus.IN_PROGRESS, changedBy: 12, changedAt: new Date('2025-10-13T15:00:00'), observation: 'Se revisó configuración IMAP y sincronización.' },
  { id: 21, ticketId: 11, status: E_TicketStatus.RESOLVED, changedBy: 12, changedAt: new Date('2025-10-14T11:00:00'), observation: 'Problema corregido y validado por el usuario.' },

  { id: 22, ticketId: 12, status: E_TicketStatus.ASSIGNED, changedBy: 13, changedAt: new Date('2025-10-14T08:00:00'), observation: 'Asignado para resolver conexión VPN.' },
  { id: 23, ticketId: 12, status: E_TicketStatus.IN_PROGRESS, changedBy: 13, changedAt: new Date('2025-10-14T12:00:00'), observation: 'Cliente VPN actualizado y pruebas en curso.' },
  { id: 24, ticketId: 12, status: E_TicketStatus.RESOLVED, changedBy: 13, changedAt: new Date('2025-10-15T10:00:00'), observation: 'Conexión establecida correctamente.' },
  { id: 25, ticketId: 12, status: E_TicketStatus.CLOSED, changedBy: 13, changedAt: new Date('2025-10-15T14:00:00'), observation: 'Ticket cerrado tras confirmación del usuario.' },

  { id: 26, ticketId: 13, status: E_TicketStatus.ASSIGNED, changedBy: 14, changedAt: new Date('2025-10-16T09:00:00'), observation: 'Asignado para eliminar amenaza detectada por antivirus.' },
  { id: 27, ticketId: 13, status: E_TicketStatus.IN_PROGRESS, changedBy: 14, changedAt: new Date('2025-10-17T10:00:00'), observation: 'Proceso de limpieza iniciado.' },
  { id: 28, ticketId: 13, status: E_TicketStatus.RESOLVED, changedBy: 14, changedAt: new Date('2025-10-18T10:00:00'), observation: 'Sistema libre de amenazas.' },
  { id: 29, ticketId: 13, status: E_TicketStatus.CLOSED, changedBy: 14, changedAt: new Date('2025-10-18T15:00:00'), observation: 'Ticket cerrado tras validación final.' }
];


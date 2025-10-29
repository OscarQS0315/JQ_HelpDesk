import { E_TicketStatus } from "../../generated/prisma";
export const ticketHistory = [

  { ticketId: 1, status: E_TicketStatus.PENDING, changedBy: 11, changedAt: new Date('2025-10-11T08:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 2, status: E_TicketStatus.PENDING, changedBy: 12, changedAt: new Date('2025-09-27T09:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 3, status: E_TicketStatus.PENDING, changedBy: 13, changedAt: new Date('2025-10-04T09:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 4, status: E_TicketStatus.PENDING, changedBy: 14, changedAt: new Date('2025-10-13T10:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 5, status: E_TicketStatus.PENDING, changedBy: 15, changedAt: new Date('2025-09-29T08:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 6, status: E_TicketStatus.PENDING, changedBy: 11, changedAt: new Date('2025-10-08T09:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 7, status: E_TicketStatus.PENDING, changedBy: 12, changedAt: new Date('2025-10-09T10:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 8, status: E_TicketStatus.PENDING, changedBy: 13, changedAt: new Date('2025-10-09T09:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 9, status: E_TicketStatus.PENDING, changedBy: 14, changedAt: new Date('2025-10-10T08:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 10, status: E_TicketStatus.PENDING, changedBy: 15, changedAt: new Date('2025-10-11T08:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 11, status: E_TicketStatus.PENDING, changedBy: 11, changedAt: new Date('2025-10-12T09:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 12, status: E_TicketStatus.PENDING, changedBy: 12, changedAt: new Date('2025-10-13T09:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 13, status: E_TicketStatus.PENDING, changedBy: 13, changedAt: new Date('2025-10-15T08:00:00'), observation: 'Ticket creado por el usuario.' },
  { ticketId: 1, status: E_TicketStatus.ASSIGNED, changedBy: 11, changedAt: new Date('2025-10-12T09:30:00'), observation: 'Ticket asignado manualmente al técnico para revisión de red local.' },
  { ticketId: 1, status: E_TicketStatus.IN_PROGRESS, changedBy: 11, changedAt: new Date('2025-10-13T10:00:00'), observation: 'El técnico inició diagnóstico de conectividad LAN.' },
  { ticketId: 2, status: E_TicketStatus.ASSIGNED, changedBy: 12, changedAt: new Date('2025-09-28T10:00:00'), observation: 'Asignación automática para revisar problemas de correo electrónico.' },
  { ticketId: 2, status: E_TicketStatus.IN_PROGRESS, changedBy: 12, changedAt: new Date('2025-09-28T15:00:00'), observation: 'Se comenzó análisis del servidor SMTP.' },
  { ticketId: 2, status: E_TicketStatus.RESOLVED, changedBy: 12, changedAt: new Date('2025-09-29T11:00:00'), observation: 'Configuración ajustada y validación de envío completada.' },
  { ticketId: 3, status: E_TicketStatus.ASSIGNED, changedBy: 13, changedAt: new Date('2025-10-05T08:00:00'), observation: 'Ticket asignado para revisión de hardware dañado.' },
  { ticketId: 3, status: E_TicketStatus.IN_PROGRESS, changedBy: 13, changedAt: new Date('2025-10-05T12:00:00'), observation: 'Se inició inspección física de la pantalla.' },
  { ticketId: 3, status: E_TicketStatus.RESOLVED, changedBy: 13, changedAt: new Date('2025-10-06T15:00:00'), observation: 'Pantalla reemplazada y funcionalidad verificada.' },
  { ticketId: 3, status: E_TicketStatus.CLOSED, changedBy: 13, changedAt: new Date('2025-10-07T14:00:00'), observation: 'Ticket cerrado tras confirmación del usuario.' },

  { ticketId: 4, status: E_TicketStatus.ASSIGNED, changedBy: 14, changedAt: new Date('2025-10-14T11:00:00'), observation: 'Asignación automática para revisar acceso remoto vía VPN.' },

  { ticketId: 5, status: E_TicketStatus.ASSIGNED, changedBy: 15, changedAt: new Date('2025-09-30T09:00:00'), observation: 'Asignado para atender amenaza detectada por antivirus.' },
  { ticketId: 5, status: E_TicketStatus.IN_PROGRESS, changedBy: 15, changedAt: new Date('2025-10-01T10:00:00'), observation: 'Análisis de malware en curso.' },
  { ticketId: 5, status: E_TicketStatus.RESOLVED, changedBy: 15, changedAt: new Date('2025-10-02T10:00:00'), observation: 'Amenaza eliminada y sistema actualizado.' },
  { ticketId: 5, status: E_TicketStatus.CLOSED, changedBy: 15, changedAt: new Date('2025-10-02T16:00:00'), observation: 'Ticket cerrado tras verificación de seguridad.' },

  { ticketId: 8, status: E_TicketStatus.ASSIGNED, changedBy: 14, changedAt: new Date('2025-10-10T11:00:00'), observation: 'Asignado para investigar actividad sospechosa en antivirus.' },
  { ticketId: 9, status: E_TicketStatus.ASSIGNED, changedBy: 15, changedAt: new Date('2025-10-11T10:00:00'), observation: 'Asignación automática para revisar acceso remoto bloqueado.' },

  { ticketId: 10, status: E_TicketStatus.ASSIGNED, changedBy: 11, changedAt: new Date('2025-10-12T09:00:00'), observation: 'Asignado para revisar falla de teclado.' },
  { ticketId: 10, status: E_TicketStatus.IN_PROGRESS, changedBy: 11, changedAt: new Date('2025-10-13T10:00:00'), observation: 'Se inició prueba con periféricos alternativos.' },

  { ticketId: 11, status: E_TicketStatus.ASSIGNED, changedBy: 12, changedAt: new Date('2025-10-13T10:00:00'), observation: 'Asignación automática para revisar duplicación de correos.' },
  { ticketId: 11, status: E_TicketStatus.IN_PROGRESS, changedBy: 12, changedAt: new Date('2025-10-13T15:00:00'), observation: 'Se revisó configuración IMAP y sincronización.' },
  { ticketId: 11, status: E_TicketStatus.RESOLVED, changedBy: 12, changedAt: new Date('2025-10-14T11:00:00'), observation: 'Problema corregido y validado por el usuario.' },

  { ticketId: 12, status: E_TicketStatus.ASSIGNED, changedBy: 13, changedAt: new Date('2025-10-14T08:00:00'), observation: 'Asignado para resolver conexión VPN.' },
  { ticketId: 12, status: E_TicketStatus.IN_PROGRESS, changedBy: 13, changedAt: new Date('2025-10-14T12:00:00'), observation: 'Cliente VPN actualizado y pruebas en curso.' },
  { ticketId: 12, status: E_TicketStatus.RESOLVED, changedBy: 13, changedAt: new Date('2025-10-15T10:00:00'), observation: 'Conexión establecida correctamente.' },
  { ticketId: 12, status: E_TicketStatus.CLOSED, changedBy: 13, changedAt: new Date('2025-10-15T14:00:00'), observation: 'Ticket cerrado tras confirmación del usuario.' },

  { ticketId: 13, status: E_TicketStatus.ASSIGNED, changedBy: 14, changedAt: new Date('2025-10-16T09:00:00'), observation: 'Asignado para eliminar amenaza detectada por antivirus.' },
  { ticketId: 13, status: E_TicketStatus.IN_PROGRESS, changedBy: 14, changedAt: new Date('2025-10-17T10:00:00'), observation: 'Proceso de limpieza iniciado.' },
  { ticketId: 13, status: E_TicketStatus.RESOLVED, changedBy: 14, changedAt: new Date('2025-10-18T10:00:00'), observation: 'Sistema libre de amenazas.' },
  { ticketId: 13, status: E_TicketStatus.CLOSED, changedBy: 14, changedAt: new Date('2025-10-18T15:00:00'), observation: 'Ticket cerrado tras validación final.' },


];


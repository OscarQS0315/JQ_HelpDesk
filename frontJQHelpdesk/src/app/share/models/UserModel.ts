import { E_Role } from "./enums/role.enum";
import { NotificationModel } from "./NotificationModel";
import { TechnicianModel } from "./TechnicianModel";
import { TicketHistoryModel } from "./TicketHistoryModel";
import { TicketModel } from "./TicketModel";
export interface UserModel {
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    profileImage: string;
    role: E_Role;
    genre: string;
    cellphone: string;
    dob: Date;
    status: boolean;
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;

    technician?: TechnicianModel;
    tickets: TicketModel[];
    ticketHistories: TicketHistoryModel[];
    notificationsToUser: NotificationModel[];
    notificationsFromUser: NotificationModel[];
}
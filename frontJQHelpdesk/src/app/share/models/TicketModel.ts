import { E_TicketStatus } from "./enums/ticketStatus.enum";
import { E_TicketPriority } from "./enums/ticketPriority.enum";
import { E_AssignedMethod } from "./enums/assignedMethod.enum";
import { UserModel } from "./UserModel";
import { TechnicianModel } from "./TechnicianModel";
import { TicketCategoryModel } from "./TicketCategoryModel";
import { AutoTriageRuleModel } from "./AutoTriageRuleModel";
import { TicketValorationModel } from "./TicketValorationModel";
import { NotificationModel } from "./NotificationModel";
import { TicketImageModel } from "./TicketImageModel";
import { TicketHistoryModel } from "./TicketHistoryModel";
export interface TicketModel {
    id: number;
    userId: number;
    technicianId?: number;
    ticketCategoryId: number;
    title: string;
    description: string;
    status: E_TicketStatus;
    priority: E_TicketPriority;
    storyPoints?: number;
    aceptanceCriteria?: string;
    comments?: string;
    resolutionDays?: number;
    slaReply: Date;
    slaResolution: Date;
    replyAchieved: boolean;
    resolutionAchieved: boolean;
    ticketValorationId?: number;
    closedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    assignedAt?: Date;
    assignedMethod?: E_AssignedMethod;
    automaticTriageRuleId?: number;

    user: UserModel;
    technician?: TechnicianModel;
    ticketCategory: TicketCategoryModel;
    automaticTriageRule?: AutoTriageRuleModel;

    ticketValoration?: TicketValorationModel;
    notifications?: NotificationModel[];
    ticketImages?: TicketImageModel[];
    ticketHistory?: TicketHistoryModel[];

}
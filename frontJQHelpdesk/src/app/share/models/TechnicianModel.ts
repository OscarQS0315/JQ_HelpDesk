import { E_TechnicianStatus } from "./enums/technicianStatus.enum";
import { UserModel } from "./UserModel";
import { SpecialityAreaModel } from "./SpecialityAreaModel";
import { TicketModel } from "./TicketModel";
export interface TechnicianModel {
    id: number;
    userId: number;
    status: E_TechnicianStatus;
    workLoad: number;
    createdAt: Date;
    updatedAt: Date;

    user: UserModel;
    specialities: SpecialityAreaModel[];
    tickets: TicketModel[];
}
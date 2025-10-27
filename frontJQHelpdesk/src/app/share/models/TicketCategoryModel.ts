import { SLAModel } from "./SLAModel";
import { SpecialityAreaModel } from "./SpecialityAreaModel";
import { CategoryEtiquetteModel } from "./CategoryEtiquetteModel";
import { TicketModel } from "./TicketModel";

export interface TicketCategoryModel {
    id: number;
    name: string;
    description: string;
    slaId: number;
    createdAt: Date;
    updatedAt: Date;

    SLA: SLAModel;
    speciality: SpecialityAreaModel[];
    categoryEtiquettes: CategoryEtiquetteModel[];

    
    tickets: TicketModel[];
}
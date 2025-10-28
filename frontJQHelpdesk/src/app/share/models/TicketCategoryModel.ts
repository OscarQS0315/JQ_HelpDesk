import { SLAModel } from "./SLAModel";
import { SpecialityAreaModel } from "./SpecialityAreaModel";
import { CategoryEtiquetteModel } from "./CategoryEtiquetteModel";
import { TicketModel } from "./TicketModel";

export interface TicketCategoryModel {
    id: number;
    name: string;
    description: string;
    slaId: number;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;

    categoryEtiquettes: CategoryEtiquetteModel[];
    SLA: SLAModel;
    specialities: SpecialityAreaModel[];
    

    
    tickets: TicketModel[];
}
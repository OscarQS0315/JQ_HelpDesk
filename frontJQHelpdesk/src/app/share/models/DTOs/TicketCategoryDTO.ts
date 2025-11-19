import {SLAModel} from '../SLAModel'

export interface TicketCategoryDTO{
    name:string;
    description: string;
    slaId: number;
    imageUrl: string;
    SLA: SLAModel;
    specialities: { id: number }[];
    categoryEtiquettes: { id: number }[];
}
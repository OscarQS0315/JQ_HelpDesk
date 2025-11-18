export interface TechnicianDTO {
    name: string;
    lastName: string;
    email: string;
    password?: string;
    profileImage: string | null;
    role: string;
    status: boolean;
    cellphone:string;
    dob?:Date;
    genre: string;
    userTechnician: {
        status: string;
        workload: number;
    };
    specialities: { id: number }[];
}
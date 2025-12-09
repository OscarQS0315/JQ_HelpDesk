export interface CreateUserDTO {
    name: string;
    lastName?: string;
    email: string;
    password: string;
    role?: 'ADMIN' | 'TECHNICIAN' | 'USER';
    profileImage?: string;
    genre?: string;
    dob?: string;
    cellphone?: string;
}

export interface UserResponseDTO {
    id: number;
    name: string;
    lastName: string;
    email: string;
    profileImage?: string;
    genre?: string;
    dob?: string;
    cellphone?: string;
    role: 'ADMIN' | 'TECHNICIAN' | 'USER';
    status: boolean;
    lastLogin?: string;
    createdAt: string;
    updatedAt: string;
}
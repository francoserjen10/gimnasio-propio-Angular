export interface User {
    id?: number;
    name: string;
    lastName: string;
    phoneNumber: string;
    birthDate: Date;
    dni: number;
    email: string;
    password: string;
    urlImage?: string;
    rolId?: number;
    emergencyContact:string;
    direction: string;
}
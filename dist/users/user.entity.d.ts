export type UserRole = 'user' | 'admin';
export declare class User {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser {
    id: string;
    email: string;
    password: string;
    username: string;
    admin: boolean;
    profileImage: string;
    createdAt: Date;
}
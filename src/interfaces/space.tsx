import { IUser } from "./user";

export interface ISpace {
    id: string;
    name: string;
    description: string;
    creator: IUser;
    users: IUser[];
}
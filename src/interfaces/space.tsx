import { IUser } from "./user";
import { IUtility } from "./utility";

export interface ISpace {
    id: string;
    name: string;
    description: string;
    creator: IUser;
    users: IUser[];
    utilities: IUtility[];
    mapUtilityCounts: any;
}
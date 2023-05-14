import { ICategory } from "./category";
import { IMap } from "./map";

export interface IUtility{
    id: string;
    title: string;
    description: string;
    category: ICategory;
    map: IMap;
    path: string;
}
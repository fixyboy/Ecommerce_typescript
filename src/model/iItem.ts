import { ID } from "../repository/iRepository";


export interface IItem {
    getCategory(): ItemCategory;
}
export interface IIdentifiableItem extends ID {
    getItem(): IItem;
}

export enum ItemCategory {
    CAKE,
    BOOK,
    TOY
}
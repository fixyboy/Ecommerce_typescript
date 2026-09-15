import { IItem } from "./iItem";

export interface IOrder {
    getItem(): IItem;
    getPrice(): number;
    getQuantity(): number;
    getId(): string;
}
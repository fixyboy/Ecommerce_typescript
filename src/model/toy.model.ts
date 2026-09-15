import { IItem, ItemCategory } from "./iItem";

export class Toy implements IItem {
    private toyName: string;
    private ageGroup: string;
    private brand: string;
    private material: string;
    private color: string;

    constructor(
        toyName: string,
        ageGroup: string,
        brand: string,
        material: string,
        color: string
    ) {
        this.toyName = toyName;
        this.ageGroup = ageGroup;
        this.brand = brand;
        this.material = material;
        this.color = color;
    }

    getToyName(): string {
        return this.toyName;
    }

    getAgeGroup(): string {
        return this.ageGroup;
    }

    getBrand(): string {
        return this.brand;
    }

    getMaterial(): string {
        return this.material;
    }

    getColor(): string {
        return this.color;
    }

    getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }
}
import { IItem, ItemCategory } from "./iItem";

export class Toy implements IItem {
    private toyType: string;
    private ageGroup: string;
    private brand: string;
    private material: string;
    private batteryRequired: string;
    private educational: string;


    constructor(
        toyType: string,
        ageGroup: string,
        brand: string,
        material: string,
        batteryRequired: string,
        educational: string
    ) {
        this.toyType = toyType;
        this.ageGroup = ageGroup;
        this.brand = brand;
        this.material = material;
        this.batteryRequired = batteryRequired;
        this.educational = educational;
    }


    getToyType(): string {
        return this.toyType;
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

    getBatteryRequired(): string {
        return this.batteryRequired;
    }

    getEducational(): string {
        return this.educational;
    }

    getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }
}
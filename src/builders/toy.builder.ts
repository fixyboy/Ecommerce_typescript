import { Toy }  from "../model/toy.model";
import logger from "../util/logger";

export class ToyBuilder {
    private toyType!: string;
    private ageGroup!: string;
    private brand!: string;
    private material!: string;
    private batteryRequired!: string;
    private educational!: string;

    public static newBuilder(): ToyBuilder {
        return new ToyBuilder();
    }

    setToyType(toyType: string): ToyBuilder {
        this.toyType = toyType;
        return this;
    };
    setAgeGroup(ageGroup: string): ToyBuilder {
        this.ageGroup = ageGroup;
        return this;
    };
    setBrand(brand: string): ToyBuilder {
        this.brand = brand;
        return this;
    };
    setMaterial(material: string): ToyBuilder {
        this.material = material;
        return this;
    };
    setBatteryRequired(batteryRequired: string): ToyBuilder {
        this.batteryRequired = batteryRequired;
        return this;
    }
    setEducational(educational: string): ToyBuilder {
        this.educational = educational;
        return this;
    }
  
    build(): Toy {
        const requiredFields = [
            this.toyType,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational,
        ];
        if (requiredFields.some((field) => !field)) {
            logger.error("All required fields must be set");
            throw new Error("All required fields must be set");
        }
        return new Toy(
            this.toyType,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational
        );
    }
  }


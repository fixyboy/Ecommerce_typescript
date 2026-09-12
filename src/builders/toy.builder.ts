import { Toy }  from "../model/toy.model";
import logger from "../util/logger";

export class ToyBuilder {
    private toyName!: string;
    private ageGroup!: string;
    private brand!: string;
    private material!: string;
    private color!: string;

    setToyName(toyName: string): ToyBuilder {
        this.toyName = toyName;
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
    setColor(color: string): ToyBuilder {
        this.color = color;
        return this;
    }
  
    build(): Toy {
        const requiredFields = [
            this.toyName,
            this.ageGroup,
            this.brand,
            this.material,
            this.color,
        ];
        if (requiredFields.some((field) => !field)) {
            logger.error("All required fields must be set");
            throw new Error("All required fields must be set");
        }
        return new Toy(
            this.toyName,
            this.ageGroup,
            this.brand,
            this.material,
            this.color
        );
    }
  }


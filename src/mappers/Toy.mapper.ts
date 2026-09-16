import { ToyBuilder } from "../builders/toy.builder";
import { Toy } from "../model/toy.model";
import { IMapper } from "./IMapper";

export class XMLToyMapper implements IMapper<Record<string, string>, Toy> {
    map(data: Record<string, string>): Toy {
        return ToyBuilder.newBuilder()
        .setToyType(data.Type)
        .setAgeGroup(data.AgeGroup)
        .setBrand(data.Brand)
        .setMaterial(data.Material)
        .setBatteryRequired(data.BatteryRequired)
        .setEducational(data.Educational)
        .build();
    }
}
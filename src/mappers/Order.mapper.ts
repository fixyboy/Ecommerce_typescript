import { OrderBuilder } from "../builders/order.builder";
import { IItem } from "../model/iItem";
import { IOrder } from "../model/iOrder";
import { IMapper } from "./IMapper";


export class CSVOrderMapper implements IMapper<string[], IOrder> {
    constructor(private itemMapper: IMapper<string[], IItem> ) {

    }
    map(data: string[]): IOrder {
        const dataLength = data.length;
        const item: IItem = this.itemMapper.map(data);
        return OrderBuilder.newBuilder()
            .setId(data[0])
            .setQuantity(parseInt(data[dataLength - 1], 10))
            .setPrice(parseInt(data[dataLength - 2], 10))
            .setItem(item)
            .build();   
    }

}

export class XMLOrderMapper implements IMapper<Record<string, string>, IOrder> {
    constructor(private itemMapper: IMapper<Record<string, string>, IItem> ) {

    }
    map(data: Record<string, string>): IOrder {
        const item: IItem = this.itemMapper.map(data);
        return OrderBuilder.newBuilder()
            .setId(data.OrderID)
            .setQuantity(parseInt(data.Quantity, 10))
            .setPrice(parseInt(data.Price, 10))
            .setItem(item)
            .build();
    }
}

export class JSONOrderMapper implements IMapper<Record<string, string>, IOrder> {
    constructor(private itemMapper: IMapper<Record<string, string>, IItem> ) {

    }
    map(data: Record<string, string>): IOrder {
        const item: IItem = this.itemMapper.map(data);
        return OrderBuilder.newBuilder()
            .setId(data["Order ID"])
            .setQuantity(parseInt(data["Quantity"], 10))
            .setPrice(parseInt(data["Price"], 10))
            .setItem(item)
            .build();
    }
}


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
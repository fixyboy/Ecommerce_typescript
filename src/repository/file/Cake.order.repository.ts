import { CSVCakeMapper } from "../../mappers/Cake.mapper";
import { CSVOrderMapper } from "../../mappers/Order.mapper";
import { IOrder } from "../../model/iOrder";
import { readCSVFile, writeCSVFile } from "../../util/CSV_parser";
import { DbException } from "../../util/exceptions/repositoryException";
import { OrderRepository } from "./Order.repository";


export class CakeOrderRepository extends OrderRepository {
    private mapper = new CSVOrderMapper(new CSVCakeMapper());
    constructor(private readonly filePath: string) {
        super();
    }
    protected async load(): Promise<IOrder[]> {
        try {
            // read 2d string array from CSV file
            const csv = await readCSVFile(this.filePath);
            // convert the string array to Order objects
            // return the list of Order objects
            return csv.map(this.mapper.map.bind(this.mapper));
        }
        catch (error: Error | unknown) {
            throw new DbException("Failed to load orders from CSV file.", error as Error);
        }
    }
    protected async save(orders: IOrder[]): Promise<void> {
        try {
            // generate the list of headers
            const header = ["id", "Type", "Flavor", "Filling", "Size", "Layers", "Frosting Type", "Frosting Flavor", "Decoration Type", "Decoration Color", "Custom Message", "Shape", "Allergies", "Special Ingredients", "Packaging Type", "Price", "Quantity"];
            // convert the orders to 2d strings
            const rawItems = orders.map(order => {
                return this.mapper.reverseMap.bind(this.mapper)(order);
            });
            // parse.write
            await writeCSVFile(this.filePath, [header, ...rawItems]);
        }
        catch (error: Error | unknown) {
            throw new DbException("Failed to save orders to CSV file.", error as Error);
        }

    }

}
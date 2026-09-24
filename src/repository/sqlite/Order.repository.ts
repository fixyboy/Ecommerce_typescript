import { Database, open } from "sqlite";
import { IOrder } from "../../model/iOrder";
import { id, Initializable, IRepository } from "../iRepository";
import config from "../../config";
import logger from "../../util/logger";
import { InitializationException } from "../../util/exceptions/repositoryException";
import { ConnectionManager } from "./ConnectionManager";
const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS order (
            id TEXT PRIMARY KEY,
            quantity INTEGER NOT NULL,
            price REAL NOT NULL,
            item_category TEXT NOT NULL,
            item_id TEXT NOT NULL
        )`;

        const INSERT_ORDER = `INSERT INTO order (id, quantity, price, item_category, item_id) VALUES (?, ?, ?, ?, ?)`;

export class OrderRepository implements IRepository<IOrder>, Initializable {
    constructor() {
    }

    async init () {
        try {
         const con = await ConnectionManager.getConnection();
        await con.exec(CREATE_TABLE);
        logger.info("Order table initialized successfully.");
    } catch (error: Error | unknown) {
        logger.error("Error initializing Order table:", error);
        throw new InitializationException("Failed to initialize Order table.", error as Error);
    }}
    
    create(item: IOrder): Promise<id> {
        try {
            
        }
        catch (error: Error | unknown) {
        logger.error("Error creating order:", error);
        throw new DbException("Failed to create order.", error as Error);
        }
    // transaction
        // insert data into order table
        // insert data into 'item' table based on the item category
    // commit transaction
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<IOrder[]> {
        throw new Error("Method not implemented.");
    }
    update(item: IOrder): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: id): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
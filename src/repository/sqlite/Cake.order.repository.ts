import { Database, open } from "sqlite";
import { IIdentifiableCake } from "../../model/cake.model";
import { id, Initializable, IRepository } from "../iRepository";
import config from "../../config";
import logger from "../../util/logger";
import { DbException, InitializationException } from "../../util/exceptions/repositoryException";
import { ConnectionManager } from "./ConnectionManager";

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS cake (
            id TEXT PRIMARY KEY,
            type TEXT NOT NULL,
            flavor TEXT NOT NULL,
            filling TEXT NOT NULL,
            size INTEGER NOT NULL,
            layers INTEGER NOT NULL,
            frosting_type TEXT NOT NULL,
            frosting_flavor TEXT NOT NULL,
            decoration_type TEXT NOT NULL,
            decoration_color TEXT NOT NULL,
            custom_message TEXT NOT NULL,
            shape TEXT NOT NULL,
            allergies TEXT NOT NULL,
            special_ingredients TEXT NOT NULL,
            packaging_type TEXT NOT NULL
        )`;



export class CakeRepository implements IRepository<IIdentifiableCake>, Initializable {

    constructor(private db: Database) {

    }
     async init (): Promise<void> {
        try {
        const con = await ConnectionManager.getConnection();
        await con.exec(CREATE_TABLE);
        logger.info("Order table initialized successfully.");
    } catch (error: Error | unknown) {
        logger.error("Error initializing Order table:", error);
        throw new InitializationException("Failed to initialize Order table.", error as Error);
    }};

    create(item: IIdentifiableCake): Promise<id> {
        try {

        }
        catch (error: Error | unknown) {
        logger.error("Error creating cake:", error);
        throw new DbException("Failed to create cake.", error as Error);
        }
    }
    get(id: id): Promise<IIdentifiableCake> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<IIdentifiableCake[]> {
        throw new Error("Method not implemented.");
    }
    update(item: IIdentifiableCake): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: id): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
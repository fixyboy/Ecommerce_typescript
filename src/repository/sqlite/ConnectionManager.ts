import { Database as SqliteDatabase, open  } from "sqlite";
import { Database, Statement } from "sqlite3";
import config from "../../config";
import { DatabaseConnectionException } from "../../util/exceptions/databaseException";

// src/repository/sqlite/ConnectionManager.ts
export class ConnectionManager {

    private static db: SqliteDatabase<Database, Statement> | null = null;

    private constructor() {}

    public static async getConnection(): Promise<SqliteDatabase<Database, Statement>> { 
        try {
            if (this.db === null) {
                this.db = await open({
                    filename: config.storage.sqlite,
                    driver: Database
                });    
            }
            return this.db;
        } catch (error) {
            throw new DatabaseConnectionException("Failed to connect to the SQLite database", { cause: error });
        }
    }
}
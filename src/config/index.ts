import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.join(__dirname, "/../../.env")});

export default {
    logDir: process.env.LOG_DIR || './logs',
    env: process.env.NODE_ENV || 'development',
    secret: process.env.secret || 'default secret',
    storage : {
        csv : {
            cake: "./data/cake orders.csv",
            toy: "./data/toy orders.xml",
            book: "./data/book orders.json"

        },
        sqlite : "src/data/orders.db"
    }
}
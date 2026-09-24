import logger from './util/logger';
import { CakeOrderRepository } from './repository/file/Cake.order.repository';
import config from './config/index';
import { Database} from 'sqlite3';
import { open } from 'sqlite';
import { OrderRepository } from './repository/file/Order.repository';
import { Initializable, InitializableRepository, IRepository } from './repository/iRepository';
import { IOrder } from './model/iOrder';

const path = config.storage.csv.cake;

async function main() {

    const repository = new CakeOrderRepository(path);
    const data = await repository.get("17");
    logger.info("list of orders %o", data);
}

async function DBSandbox() {
    const db = await open({
        filename: 'src/data/orders.db',
        driver: Database
    })
    await db.exec(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_name TEXT NOT NULL,
            item TEXT NOT NULL,
            quantity INTEGER NOT NULL DEFAULT 1,
            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    `);

    const dummyOrders = [
        { customerName: 'Alice Smith', item: 'Chocolate Cake', quantity: 1 },
        { customerName: 'Bob Jones', item: 'Vanilla Cake', quantity: 2 },
        { customerName: 'Carol Brown', item: 'Red Velvet Cake', quantity: 1 }
    ];

    for (const order of dummyOrders) {
        await db.run(
            `INSERT INTO orders (customer_name, item, quantity)
             VALUES (?, ?, ?)`,
            order.customerName,
            order.item,
            order.quantity
        );
    }

    const orders = await db.all('SELECT * FROM orders');
    logger.info('all orders %o', orders);

    const orderRepository : InitializableRepository<IOrder> = new OrderRepository();
    orderRepository.

}

//main();

DBSandbox();
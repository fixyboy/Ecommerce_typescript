import logger from './util/logger';
import { CakeOrderRepository } from './repository/file/Cake.order.repository';
import config from './config/index';

const path = config.storage.csv.cake;

async function main() {

    const repository = new CakeOrderRepository(path);
    const data = await repository.get("17");
    logger.info("list of orders %o", data);
}

main();
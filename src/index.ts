import path from 'path';
import logger from './util/logger';
import { parseJSONFile } from './util/JSON_parser';
import { JSONOrderMapper } from './mappers/Order.mapper';
import { JSONBookMapper } from './mappers/Book.mapper';

const dataPath = path.resolve(__dirname, './data/book orders.json');

async function main() {
    const data = await parseJSONFile(dataPath);
    const bookMapper = new JSONBookMapper();
    const orderMapper = new JSONOrderMapper(bookMapper);
    const orders = data.map(r => orderMapper.map(r));
    logger.info("Successfully mapped list of orders from JSON data.%o", orders);
}

main();
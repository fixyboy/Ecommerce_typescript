import path from 'path';
import logger from './util/logger';
import { readCSVFile } from './util/CSV_parser';
import { CSVCakeMapper } from './mappers/Cake.mapper';
import { CSVOrderMapper } from './mappers/Order.mapper';

const dataPath = path.resolve(__dirname, './data/cake orders.csv');

async function main() {
    const data = await readCSVFile(dataPath);
    const cakeMapper = new CSVCakeMapper();
    const orderMapper = new CSVOrderMapper(cakeMapper);
    const orders = data.map(r => orderMapper.map(r));
    logger.info("Successfully mapped list of orders from CSV data.%o", orders);
}

main();
import { promises as fs } from 'fs';
import { parseString } from 'xml2js';
import logger from './logger';

export async function parseXMLFile(filePath: string): Promise<Record<string, string>[]> {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');

        return new Promise((resolve, reject) => {
            parseString(fileContent, { explicitArray: false }, (err, result) => {
                if (err)
                {
                    reject(err)
                }
                else
                {
                    logger.info("XML file read successfully %s: %o", filePath, result);
                    // xml2js with explicitArray:false collapses a single <row> into a plain
                    // object instead of a 1-element array — normalize so callers always get an array.
                    const rows = result.data.row;
                    resolve(Array.isArray(rows) ? rows : [rows]);
                }
            });
        });

    } catch (error) {
        logger.error("Error reading XML file %s: %o", filePath, error);
        throw new Error(`Error reading XML file: ${error}`);
    }
}

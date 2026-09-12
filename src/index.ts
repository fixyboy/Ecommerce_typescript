import path from 'path';
import { parseJSONFile } from './util/JSON_parser'
import logger from './util/logger';
import { CakeBuilder } from './builders/cake.builder';
import { BookBuilder } from './builders/book.builder';

const dataPath = path.resolve(__dirname, '../data/book orders.json');

async function main() {
    const bookBuilder = new BookBuilder();
    const book = bookBuilder.setBookTitle("The Great Gatsby")
        .setAuthor("F. Scott Fitzgerald")
        .setGenre("Fiction")
        .setFormat("Hardcover")
        .setLanguage("English")
        .setPublisher("Scribner")
        .setSpecialEdition("Anniversary Edition")
        .setPackaging("Standard Packaging")
    .build();
    console.log(book)
}

main();
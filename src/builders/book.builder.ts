import { Book } from "../model/book.model";
import logger from "../util/logger";

export class BookBuilder {
        private bookTitle!: string;
        private author!: string;
        private genre!: string;
        private format!: string;
        private language!: string;
        private publisher!: string;
        private specialEdition!: string;
        private packaging!: string;

        setBookTitle(bookTitle: string): BookBuilder {
            this.bookTitle = bookTitle;
            return this;
        }
        setAuthor(author: string): BookBuilder {
            this.author = author;
            return this;
        }
        setGenre(genre: string): BookBuilder {
            this.genre = genre;
            return this;
        }
        setFormat(format: string): BookBuilder {
            this.format = format;
            return this;
        }
        setLanguage(language: string): BookBuilder {
            this.language = language;
            return this;
        }
        setPublisher(publisher: string): BookBuilder {
            this.publisher = publisher;
            return this;
        }
        setSpecialEdition(specialEdition: string): BookBuilder {
            this.specialEdition = specialEdition;
            return this;
        }
        setPackaging(packaging: string): BookBuilder {
            this.packaging = packaging;
            return this;
        }
        build(): Book {
            const requiredFields = [
                this.bookTitle,
                this.author,
                this.genre,
                this.format,
                this.language,
                this.publisher,
                this.specialEdition,
                this.packaging
            ];
            for (const field of requiredFields) {
                if (!field) {
                    logger.error("Missing required field for Book creation.");
                    throw new Error("Missing required field for Book creation.");
                }
            };
            return new Book(
                this.bookTitle,
                this.author,
                this.genre,
                this.format,
                this.language,
                this.publisher,
                this.specialEdition,
                this.packaging
            );
        }
}
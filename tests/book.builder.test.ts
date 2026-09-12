import { BookBuilder } from '../src/builders/book.builder';

describe ('BookBuilder', () => {
    it('builds a Book with all required properties set', () => {
        const book = new BookBuilder()
            .setBookTitle('The Great Gatsby')
            .setAuthor('F. Scott Fitzgerald')
            .setGenre('Fiction')
            .setFormat('Hardcover')
            .setLanguage('English')
            .setPublisher('Scribner')
            .setSpecialEdition('First Edition')
            .setPackaging('Standard Box')
            .build();

            expect(book.getBookTitle()).toBe('The Great Gatsby');
            expect(book.getAuthor()).toBe('F. Scott Fitzgerald');
            expect(book.getGenre()).toBe('Fiction');
            expect(book.getFormat()).toBe('Hardcover');
            expect(book.getLanguage()).toBe('English');
            expect(book.getPublisher()).toBe('Scribner');
            expect(book.getSpecialEdition()).toBe('First Edition');
            expect(book.getPackaging()).toBe('Standard Box');
    });

    it('throws when required properties are missing', () => {
        const builder = new BookBuilder()
            .setBookTitle('The Great Gatsby')
            .setAuthor('F. Scott Fitzgerald');
        // genre, format, language, publisher, specialEdition, packaging never set
        expect(() => builder.build()).toThrow('Missing required field for Book creation.');
    });

    it('supports fluent chaining by returning the builder from each setter', () => {
        const builder = new BookBuilder();
        expect(builder.setBookTitle('The Great Gatsby')).toBe(builder);
        expect(builder.setAuthor('F. Scott Fitzgerald')).toBe(builder);
        expect(builder.setGenre('Fiction')).toBe(builder);
        expect(builder.setFormat('Hardcover')).toBe(builder);
        expect(builder.setLanguage('English')).toBe(builder);
        expect(builder.setPublisher('Scribner')).toBe(builder);
        expect(builder.setSpecialEdition('First Edition')).toBe(builder);
        expect(builder.setPackaging('Standard Box')).toBe(builder);
    });
});
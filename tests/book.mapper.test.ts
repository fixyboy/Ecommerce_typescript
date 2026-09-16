import { JSONBookMapper } from '../src/mappers/Book.mapper';

describe('JSONBookMapper', () => {
    const validRow: Record<string, string> = {
        "Order ID": "2001",
        "Book Title": "Edge of Eternity",
        "Author": "Dan Brown",
        "Genre": "Science Fiction",
        "Format": "Paperback",
        "Language": "French",
        "Publisher": "Oxford Press",
        "Special Edition": "Signed Copy",
        "Packaging": "Eco-Friendly Packaging",
        "Price": "12",
        "Quantity": "5"
    };

    it('maps a raw JSON row into a Book with the correct fields', () => {
        const mapper = new JSONBookMapper();
        const book = mapper.map(validRow);

        expect(book.getBookTitle()).toBe('Edge of Eternity');
        expect(book.getAuthor()).toBe('Dan Brown');
        expect(book.getGenre()).toBe('Science Fiction');
        expect(book.getFormat()).toBe('Paperback');
        expect(book.getLanguage()).toBe('French');
        expect(book.getPublisher()).toBe('Oxford Press');
        expect(book.getSpecialEdition()).toBe('Signed Copy');
        expect(book.getPackaging()).toBe('Eco-Friendly Packaging');
    });

    it('ignores fields that belong to the Order, not the Book', () => {
        // "Order ID", "Price" and "Quantity" describe the order, not the book itself —
        // the mapper should just leave them out of the built Book.
        const mapper = new JSONBookMapper();
        const book = mapper.map(validRow);

        expect(book).not.toHaveProperty('Order ID');
        expect(book).not.toHaveProperty('Price');
        expect(book).not.toHaveProperty('Quantity');
    });

    it('throws when a required field is missing from the raw row', () => {
        const { ["Author"]: _omitted, ...incompleteRow } = validRow;
        const mapper = new JSONBookMapper();

        expect(() => mapper.map(incompleteRow)).toThrow();
    });
});

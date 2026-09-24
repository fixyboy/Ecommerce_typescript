export class DatabaseConnectionException extends Error {
    constructor(message: string, error?: Error) {
        super(message);
        this.name = "DatabaseConnectionException";
        if (error) {
            this.stack = error.stack;
            this.message = `${message}: ${error.message}`;
        }
    }
}
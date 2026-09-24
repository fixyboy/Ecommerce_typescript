export class ItemNotFoundException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ItemNotFoundException";
    }
} 

export class InvalidItemException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidItemException";
    }
}

export class InitializationException extends Error {
    
    constructor(message: string, error: Error) {
        super(message);
        this.stack = error.stack;
        this.name = "InitializationException";
        this.message = `${message}: ${error.message}`;
    }
}

export class DbException extends Error {
    constructor(message: string, error?: Error) {
        super(message);
        this.name = "DbException";
        if (error) {
            this.stack = error.stack;
            this.message = `${message}: ${error.message}`;
        }
    }
}
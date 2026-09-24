export type id = string;

export interface ID {
    /** Returns the identifier value. */
    getId(): string;
}

export interface Initializable {
    /**
     * Initializes the object, creates the required tables, and establishes a connection.
    * @returns A promise that resolves when initialization is complete.
     * @throws {InitializationException} If initialization fails.
     */
    init(): Promise<void>;
}


/**
 * Repository for entities identified by an ID.
 * @template T The entity type managed by this repository.
 */
export interface IRepository<T extends ID> {

    /**
     * Creates an item.
     * @param item The entity to create.
     * @returns The identifier assigned to the created entity.
     * @throws {InvalidItemException} If the item is invalid.
     * @throws {DbException} If  an error occurs while interacting with the database.
     */
    create(item: T): Promise<id>;

    /**
     * Retrieves an item by its identifier.
     * @param id The target ID to be found through the repository.
     * @returns The matching entity.
     * @throws {Error} If no item is found with the given ID.
     * @throws {DbException} If  an error occurs while interacting with the database.

     */
    get(id: id): Promise<T>;

    /**
     * Retrieves all items managed by the repository.
     * @returns All stored entities.
     * @throws {DbException} If  an error occurs while interacting with the database.
     */
    getAll(): Promise<T[]>;

    /**
     * Updates an existing item.
     * @param item The entity to update.
        * @returns A promise that resolves when the item has been updated.
     * @throws {Error} If the item is invalid or not found with the given ID.
     * @throws {DbException} If  an error occurs while interacting with the database.
     */
    update(item: T): Promise<void>;

    /**
     * Deletes an item by its identifier.
     * @param id The identifier of the item to delete.
        * @returns A promise that resolves when the item has been deleted.
     * @throws {Error} If no item is found with the given ID.
     * @throws {DbException} If  an error occurs while interacting with the database.
     */
    delete(id: id): Promise<void>;
}

export interface InitializableRepository<T extends ID> extends IRepository<T>, Initializable {};
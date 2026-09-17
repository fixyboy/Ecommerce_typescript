export type id = string;

export interface ID {
    /** Returns the identifier value. */
    getId(): string;
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
     */
    create(item: T): Promise<id>;

    /**
     * Retrieves an item by its identifier.
     * @param id The target ID to be found through the repository.
     * @returns The matching entity.
     * @throws {Error} If no item is found with the given ID.
     */
    get(id: id): Promise<T>;

    /**
     * Retrieves all items managed by the repository.
     * @returns All stored entities.
     */
    getAll(): Promise<T[]>;

    /**
     * Updates an existing item.
     * @param item The entity to update.
     * @throws {Error} If the item is invalid or not found with the given ID.
     */
    update(item: T): Promise<void>;

    /**
     * Deletes an item by its identifier.
     * @param id The identifier of the item to delete.
     * @throws {Error} If no item is found with the given ID.
     */
    delete(id: id): Promise<void>;
}
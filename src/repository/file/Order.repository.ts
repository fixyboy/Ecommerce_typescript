import { IOrder } from "../../model/iOrder";
import { InvalidItemException, ItemNotFoundException } from "../../util/exceptions/repositoryExceprion";
import logger from "../../util/logger";
import { id, ID, IRepository } from "../iRepository";

export abstract class OrderRepository implements IRepository<IOrder> {

    protected abstract load(): Promise<IOrder[]> ;
    protected abstract save (orders: IOrder[]): Promise<void> ;

    async create(item: IOrder): Promise<id> {
        // validate the new order
        if (!item) {
            logger.error("Invalid order: Order cannot be null or undefined.");
            throw new InvalidItemException("Invalid order: Order cannot be null or undefined.");
        }
        // load all orders
        const orders = await this.load();
        // add the new order
        const id = orders.push(item);
        // save all orders
        await this.save(orders);
        logger.info("Order with ID %s created successfully.", id);
        return String(id);
    }
    async get(id: id): Promise<IOrder> {
        const orders = await this.load();
        const foundOrder = orders.find(order => order.getId() === id);
        if (!foundOrder) {
            logger.error("Order with ID %s not found.", id);
            throw new ItemNotFoundException(`Order with ID ${id} not found.`);
        }
        logger.info("Order with ID %s retrieved successfully.", id);
        return foundOrder;
    }

    async getAll(): Promise<IOrder[]> {
        const orders = await this.load();
        logger.info("All orders retrieved successfully.%d", orders.length);
        return orders;
    }
    async update(item: IOrder): Promise<void> {
        if (!item) {
            logger.error("Invalid order: Order cannot be null or undefined.");
            throw new InvalidItemException("Invalid order: Order cannot be null or undefined.");
        }
        const orders = await this.load();
        const index = orders.findIndex(order => order.getId() === item.getId());
        if (index === -1) {
            logger.error("Order with ID %s not found.", item.getId());
            throw new ItemNotFoundException(`Order with ID ${item.getId()} not found.`);
        }
        orders[index] = item;
        await this.save(orders);
        logger.info("Order with ID %s updated successfully.", item.getId());
    }
    async delete(id: id): Promise<void> {
        const orders = await this.load();
        const index = orders.findIndex(order => order.getId() === id);
        if (index === -1) {
            logger.error("Order with ID %s not found.", id);
            throw new ItemNotFoundException(`Order with ID ${id} not found.`);
        }
        orders.splice(index, 1);
        await this.save(orders);
        logger.info("Order with ID %s deleted successfully.", id);
    }

}
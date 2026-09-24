import { IOrder } from "../../model/iOrder";
import { DbException, InvalidItemException, ItemNotFoundException } from "../../util/exceptions/repositoryException";
import logger from "../../util/logger";
import { id, IRepository } from "../iRepository";

export abstract class OrderRepository implements IRepository<IOrder> {

    protected abstract load(): Promise<IOrder[]> ;
    protected abstract save (orders: IOrder[]): Promise<void> ;

    async create(item: IOrder): Promise<id> {
        try {
            if (!item) {
                logger.error("Invalid order: Order cannot be null or undefined.");
                throw new InvalidItemException("Invalid order: Order cannot be null or undefined.");
            }
            const orders = await this.load();
            const id = orders.push(item);
            await this.save(orders);
            logger.info("Order with ID %s created successfully.", id);
            return String(id);
        } catch (error) {
            if (error instanceof InvalidItemException) throw error;
            throw new DbException(`Failed to create order: ${error}`);
        }
    }
    async get(id: id): Promise<IOrder> {
        try {
            const orders = await this.load();
            const foundOrder = orders.find(order => order.getId() === id);
            if (!foundOrder) {
                logger.error("Order with ID %s not found.", id);
                throw new ItemNotFoundException(`Order with ID ${id} not found.`);
            }
            logger.info("Order with ID %s retrieved successfully.", id);
            return foundOrder;
        } catch (error) {
            if (error instanceof ItemNotFoundException) throw error;
            throw new DbException(`Failed to get order: ${error}`);
        }
    }

    async getAll(): Promise<IOrder[]> {
        try {
            const orders = await this.load();
            logger.info("All orders retrieved successfully.%d", orders.length);
            return orders;
        } catch (error) {
            throw new DbException(`Failed to get orders: ${error}`);
        }
    }
    async update(item: IOrder): Promise<void> {
        try {
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
        } catch (error) {
            if (error instanceof InvalidItemException || error instanceof ItemNotFoundException) throw error;
            throw new DbException(`Failed to update order: ${error}`);
        }
    }
    async delete(id: id): Promise<void> {
        try {
            const orders = await this.load();
            const index = orders.findIndex(order => order.getId() === id);
            if (index === -1) {
                logger.error("Order with ID %s not found.", id);
                throw new ItemNotFoundException(`Order with ID ${id} not found.`);
            }
            orders.splice(index, 1);
            await this.save(orders);
            logger.info("Order with ID %s deleted successfully.", id);
        } catch (error) {
            if (error instanceof ItemNotFoundException) throw error;
            throw new DbException(`Failed to delete order: ${error}`);
        }
    }

}
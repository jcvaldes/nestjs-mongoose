import { Model } from 'mongoose';
import { Order } from '../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    create(data: CreateOrderDto): Promise<Order>;
    update(id: string, changes: UpdateOrderDto): Promise<Order>;
    remove(id: string): import("mongoose").Query<Order, Order, {}>;
    removeProduct(id: string, productId: string): Promise<Order>;
    addProducts(id: string, productsIds: string[]): Promise<Order>;
}

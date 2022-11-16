/// <reference types="mongoose" />
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto, UpdateOrderDto, AddProductsToOrderDto } from '../dtos/order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<import("../entities/order.entity").Order[]>;
    get(id: string): Promise<import("../entities/order.entity").Order>;
    create(payload: CreateOrderDto): Promise<import("../entities/order.entity").Order>;
    update(id: string, payload: UpdateOrderDto): Promise<import("../entities/order.entity").Order>;
    updateProducts(id: string, payload: AddProductsToOrderDto): Promise<import("../entities/order.entity").Order>;
    remove(id: string): import("mongoose").Query<import("../entities/order.entity").Order, import("../entities/order.entity").Order, {}>;
    removeProduct(id: string, productId: string): Promise<import("../entities/order.entity").Order>;
}

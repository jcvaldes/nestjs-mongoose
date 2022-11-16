/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto, UpdateOrderDto, AddProductsToOrderDto } from '../dtos/order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<Omit<Omit<import("../entities/order.entity").Order & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
    get(id: string): Promise<import("../entities/order.entity").Order & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(payload: CreateOrderDto): Promise<import("../entities/order.entity").Order & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, payload: UpdateOrderDto): Promise<import("../entities/order.entity").Order & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateProducts(id: string, payload: AddProductsToOrderDto): Promise<import("../entities/order.entity").Order & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): import("mongoose").Query<import("../entities/order.entity").Order & {
        _id: import("mongoose").Types.ObjectId;
    }, import("../entities/order.entity").Order & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../entities/order.entity").Order>;
    removeProduct(id: string, productId: string): Promise<import("../entities/order.entity").Order & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

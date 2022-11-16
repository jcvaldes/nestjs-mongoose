import { Document, Types } from 'mongoose';
import { Customer } from './customer.entity';
import { Product } from '../../products/entities/product.entity';
export declare class Order extends Document {
    date: Date;
    customer: Customer | Types.ObjectId;
    products: Types.Array<Product>;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<any, any>, undefined>;

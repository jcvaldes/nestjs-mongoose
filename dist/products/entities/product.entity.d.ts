import { Document, Types } from 'mongoose';
import { Brand } from './brand.entity';
export declare class Product extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    category: Record<string, any>;
    brand: Brand | Types.ObjectId;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<any, any>, undefined>;

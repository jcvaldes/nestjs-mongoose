import { Document } from 'mongoose';
export declare class Brand extends Document {
    name: string;
    image: string;
}
export declare const BrandSchema: import("mongoose").Schema<Brand, import("mongoose").Model<any, any>, undefined>;

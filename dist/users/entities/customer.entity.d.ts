import { Document, Types } from 'mongoose';
export declare class Customer extends Document {
    name: string;
    lastName: string;
    phone: string;
    skills: Types.Array<Record<string, any>>;
}
export declare const CustomerSchema: import("mongoose").Schema<Customer, import("mongoose").Model<any, any>, undefined>;

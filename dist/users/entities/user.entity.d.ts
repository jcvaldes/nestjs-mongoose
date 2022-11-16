import { Document } from 'mongoose';
export declare class User extends Document {
    email: string;
    password: string;
    role: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<any, any>, undefined>;

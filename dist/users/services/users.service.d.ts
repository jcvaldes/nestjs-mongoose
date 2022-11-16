import { Db } from 'mongodb';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProductsService } from '../../products/services/products.service';
export declare class UsersService {
    private productsService;
    private databaseMongo;
    private userModel;
    constructor(productsService: ProductsService, databaseMongo: Db, userModel: Model<User>);
    findAll(): Promise<User[]>;
    getTasks(): Promise<any[]>;
    findOne(id: string): Promise<User>;
    getOrdersByUser(userId: string): Promise<{
        date: Date;
        user: User;
        products: any[];
    }>;
    create(data: CreateUserDto): Promise<{
        _id?: any;
        __v?: number;
        id?: any;
        email: string;
        role: string;
    }>;
    findByEmail(email: string): Promise<User>;
    update(id: string, changes: UpdateUserDto): Promise<User>;
    remove(id: string): import("mongoose").Query<User, User, {}>;
}

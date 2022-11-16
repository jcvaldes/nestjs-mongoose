/// <reference types="mongoose" />
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    tasks(): Promise<any[]>;
    get(id: string): Promise<import("../entities/user.entity").User>;
    getOrders(id: string): Promise<{
        date: Date;
        user: import("../entities/user.entity").User;
        products: any[];
    }>;
    create(payload: CreateUserDto): Promise<{
        _id?: any;
        __v?: number;
        id?: any;
        email: string;
        role: string;
    }>;
    update(id: string, payload: UpdateUserDto): Promise<import("../entities/user.entity").User>;
    remove(id: string): import("mongoose").Query<import("../entities/user.entity").User, import("../entities/user.entity").User, {}>;
}

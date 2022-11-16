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
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<(import("../entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    tasks(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    get(id: string): Promise<import("../entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getOrders(id: string): Promise<{
        date: Date;
        user: import("../entities/user.entity").User & {
            _id: import("mongoose").Types.ObjectId;
        };
        products: any[];
    }>;
    create(payload: CreateUserDto): Promise<{
        [x: string]: any;
        [x: number]: any;
        [x: symbol]: any;
    }>;
    update(id: string, payload: UpdateUserDto): Promise<import("../entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): import("mongoose").Query<import("../entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }, import("../entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../entities/user.entity").User>;
}

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
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomerController {
    private customersService;
    constructor(customersService: CustomersService);
    findAll(): Promise<(import("../entities/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    get(id: string): Promise<import("../entities/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(payload: CreateCustomerDto): Promise<import("../entities/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, payload: UpdateCustomerDto): Promise<import("../entities/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): import("mongoose").Query<import("../entities/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    }, import("../entities/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../entities/customer.entity").Customer>;
}

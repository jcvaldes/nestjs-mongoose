/// <reference types="mongoose" />
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomerController {
    private customersService;
    constructor(customersService: CustomersService);
    findAll(): Promise<import("../entities/customer.entity").Customer[]>;
    get(id: string): Promise<import("../entities/customer.entity").Customer>;
    create(payload: CreateCustomerDto): Promise<import("../entities/customer.entity").Customer>;
    update(id: string, payload: UpdateCustomerDto): Promise<import("../entities/customer.entity").Customer>;
    remove(id: string): import("mongoose").Query<import("../entities/customer.entity").Customer, import("../entities/customer.entity").Customer, {}>;
}

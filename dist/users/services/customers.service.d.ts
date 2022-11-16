import { Model } from 'mongoose';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomersService {
    private customerModel;
    constructor(customerModel: Model<Customer>);
    findAll(): Promise<Customer[]>;
    findOne(id: string): Promise<Customer>;
    create(data: CreateCustomerDto): Promise<Customer>;
    update(id: string, changes: UpdateCustomerDto): Promise<Customer>;
    remove(id: string): import("mongoose").Query<Customer, Customer, {}>;
}

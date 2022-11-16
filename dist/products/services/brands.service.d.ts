import { Model } from 'mongoose';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
export declare class BrandsService {
    private brandModel;
    constructor(brandModel: Model<Brand>);
    findAll(): Promise<Brand[]>;
    findOne(id: string): Promise<Brand>;
    create(data: CreateBrandDto): Promise<Brand>;
    update(id: string, changes: UpdateBrandDto): Promise<Brand>;
    remove(id: string): import("mongoose").Query<Brand, Brand, {}>;
}

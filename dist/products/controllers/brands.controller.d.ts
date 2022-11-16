/// <reference types="mongoose" />
import { BrandsService } from '../services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
export declare class BrandsController {
    private brandsService;
    constructor(brandsService: BrandsService);
    findAll(): Promise<import("../entities/brand.entity").Brand[]>;
    get(id: string): Promise<import("../entities/brand.entity").Brand>;
    create(payload: CreateBrandDto): Promise<import("../entities/brand.entity").Brand>;
    update(id: string, payload: UpdateBrandDto): Promise<import("../entities/brand.entity").Brand>;
    remove(id: string): import("mongoose").Query<import("../entities/brand.entity").Brand, import("../entities/brand.entity").Brand, {}>;
}

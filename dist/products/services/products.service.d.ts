import { Model } from 'mongoose';
import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto, FilterProductsDto } from './../dtos/products.dtos';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    findAll(params?: FilterProductsDto): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(data: CreateProductDto): Promise<Product>;
    update(id: string, changes: UpdateProductDto): Promise<Product>;
    remove(id: string): import("mongoose").Query<Product, Product, {}>;
}

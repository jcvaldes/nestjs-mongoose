/// <reference types="mongoose" />
import { CreateProductDto, UpdateProductDto, FilterProductsDto } from '../dtos/products.dtos';
import { ProductsService } from './../services/products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(params: FilterProductsDto): Promise<import("../entities/product.entity").Product[]>;
    getProductFilter(): string;
    getOne(productId: string): Promise<import("../entities/product.entity").Product>;
    create(payload: CreateProductDto): Promise<import("../entities/product.entity").Product>;
    update(id: string, payload: UpdateProductDto): Promise<import("../entities/product.entity").Product>;
    delete(id: string): import("mongoose").Query<import("../entities/product.entity").Product, import("../entities/product.entity").Product, {}>;
}

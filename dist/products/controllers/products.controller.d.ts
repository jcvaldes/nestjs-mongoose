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
import { CreateProductDto, UpdateProductDto, FilterProductsDto } from '../dtos/products.dtos';
import { ProductsService } from './../services/products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(params: FilterProductsDto): Promise<Omit<import("../entities/product.entity").Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getProductFilter(): string;
    getOne(productId: string): Promise<import("../entities/product.entity").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(payload: CreateProductDto): Promise<import("../entities/product.entity").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, payload: UpdateProductDto): Promise<import("../entities/product.entity").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): import("mongoose").Query<import("../entities/product.entity").Product & {
        _id: import("mongoose").Types.ObjectId;
    }, import("../entities/product.entity").Product & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../entities/product.entity").Product>;
}

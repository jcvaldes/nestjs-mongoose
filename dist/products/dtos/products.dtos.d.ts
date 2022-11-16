import { CreateCategoryDto } from './category.dtos';
export declare class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly image: string;
    readonly category: CreateCategoryDto;
    readonly brand: string;
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export declare class FilterProductsDto {
    limit: number;
    offset: number;
    minPrice: number;
    maxPrice: number;
}
export {};

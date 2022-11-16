export declare class CreateOrderDto {
    readonly customer: string;
    readonly date: Date;
    readonly products: string[];
}
declare const UpdateOrderDto_base: import("@nestjs/common").Type<Partial<Omit<CreateOrderDto, "products">>>;
export declare class UpdateOrderDto extends UpdateOrderDto_base {
}
export declare class AddProductsToOrderDto {
    readonly productsIds: string[];
}
export {};

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterProductsDto = exports.UpdateProductDto = exports.CreateProductDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const category_dtos_1 = require("./category.dtos");
class CreateProductDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ description: `product's name` }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsPositive(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stock", void 0);
__decorate([
    class_validator_1.IsUrl(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "image", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    swagger_1.ApiProperty(),
    __metadata("design:type", category_dtos_1.CreateCategoryDto)
], CreateProductDto.prototype, "category", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "brand", void 0);
exports.CreateProductDto = CreateProductDto;
class UpdateProductDto extends swagger_1.PartialType(CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
class FilterProductsDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsPositive(),
    __metadata("design:type", Number)
], FilterProductsDto.prototype, "limit", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], FilterProductsDto.prototype, "offset", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], FilterProductsDto.prototype, "minPrice", void 0);
__decorate([
    class_validator_1.ValidateIf((params) => params.minPrice),
    class_validator_1.IsPositive(),
    __metadata("design:type", Number)
], FilterProductsDto.prototype, "maxPrice", void 0);
exports.FilterProductsDto = FilterProductsDto;
//# sourceMappingURL=products.dtos.js.map
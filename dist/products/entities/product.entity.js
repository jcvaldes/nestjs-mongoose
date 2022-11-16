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
exports.ProductSchema = exports.Product = void 0;
const openapi = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const brand_entity_1 = require("./brand.entity");
let Product = class Product extends mongoose_2.Document {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, image: { required: true, type: () => String }, category: { required: true, type: () => Object }, brand: { required: true, type: () => Object } };
    }
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop({ type: Number, index: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop({ type: Number }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        name: { type: String },
        image: { type: String },
    })),
    __metadata("design:type", Object)
], Product.prototype, "category", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: brand_entity_1.Brand.name }),
    __metadata("design:type", Object)
], Product.prototype, "brand", void 0);
Product = __decorate([
    mongoose_1.Schema()
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
exports.ProductSchema.index({ price: 1, stock: -1 });
//# sourceMappingURL=product.entity.js.map
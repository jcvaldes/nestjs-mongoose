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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_entity_1 = require("./../entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    findAll(params) {
        if (params) {
            const filters = {};
            const { limit, offset } = params;
            const { minPrice, maxPrice } = params;
            if (minPrice && maxPrice) {
                filters.price = { $gte: minPrice, $lte: maxPrice };
            }
            return this.productModel
                .find(filters)
                .populate('brand')
                .skip(offset)
                .limit(limit)
                .exec();
        }
        return this.productModel.find().populate('brand').exec();
    }
    async findOne(id) {
        const product = await this.productModel.findById(id).exec();
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return product;
    }
    create(data) {
        const newProduct = new this.productModel(data);
        return newProduct.save();
    }
    update(id, changes) {
        const product = this.productModel
            .findByIdAndUpdate(id, { $set: changes }, { new: true })
            .exec();
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return product;
    }
    remove(id) {
        return this.productModel.findByIdAndDelete(id);
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(product_entity_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map
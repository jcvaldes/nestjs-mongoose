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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const brand_entity_1 = require("../entities/brand.entity");
let BrandsService = class BrandsService {
    constructor(brandModel) {
        this.brandModel = brandModel;
    }
    findAll() {
        return this.brandModel.find().exec();
    }
    async findOne(id) {
        const product = await this.brandModel.findOne({ _id: id }).exec();
        if (!product) {
            throw new common_1.NotFoundException(`Brand #${id} not found`);
        }
        return product;
    }
    create(data) {
        const newBrand = new this.brandModel(data);
        return newBrand.save();
    }
    async update(id, changes) {
        const product = await this.brandModel
            .findByIdAndUpdate(id, { $set: changes }, { new: true })
            .exec();
        if (!product) {
            throw new common_1.NotFoundException(`Brand #${id} not found`);
        }
        return product;
    }
    remove(id) {
        return this.brandModel.findByIdAndDelete(id);
    }
};
BrandsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(brand_entity_1.Brand.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map
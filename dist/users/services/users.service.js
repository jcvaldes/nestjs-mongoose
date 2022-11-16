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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_entity_1 = require("../entities/user.entity");
const products_service_1 = require("../../products/services/products.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(productsService, databaseMongo, userModel) {
        this.productsService = productsService;
        this.databaseMongo = databaseMongo;
        this.userModel = userModel;
    }
    findAll() {
        return this.userModel.find().exec();
    }
    getTasks() {
        const tasksCollection = this.databaseMongo.collection('tasks');
        return tasksCollection.find().toArray();
    }
    async findOne(id) {
        return this.userModel.findById(id);
    }
    async getOrdersByUser(userId) {
        const user = await this.findOne(userId);
        return {
            date: new Date(),
            user,
            products: [],
        };
    }
    async create(data) {
        const newModel = new this.userModel(data);
        const hashPassword = await bcrypt.hashSync(newModel.password, 10);
        newModel.password = hashPassword;
        const model = await newModel.save();
        const _a = model.toJSON(), { password } = _a, rta = __rest(_a, ["password"]);
        return rta;
    }
    findByEmail(email) {
        return this.userModel.findOne({ email }).exec();
    }
    update(id, changes) {
        return this.userModel
            .findByIdAndUpdate(id, { $set: changes }, { new: true })
            .exec();
    }
    remove(id) {
        return this.userModel.findByIdAndDelete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('MONGO')),
    __param(2, (0, mongoose_2.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        mongodb_1.Db,
        mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
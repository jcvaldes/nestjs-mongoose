"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongodb_1 = require("mongodb");
const config_1 = require("../config");
const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: (configService) => {
                    const { connection, user, password, host, dbName, } = configService.mongo;
                    return {
                        uri: `${connection}://${host}`,
                        user,
                        pass: password,
                        dbName,
                    };
                },
                inject: [config_1.default.KEY],
            }),
        ],
        providers: [
            {
                provide: 'API_KEY',
                useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
            },
            {
                provide: 'MONGO',
                useFactory: async (configService) => {
                    const { connection, user, password, host, dbName, } = configService.mongo;
                    const uri = `${connection}://${user}:${password}@${host}/?authSource=admin&readPreference=primary`;
                    const client = new mongodb_1.MongoClient(uri);
                    await client.connect();
                    const database = client.db(dbName);
                    return database;
                },
                inject: [config_1.default.KEY],
            },
        ],
        exports: ['API_KEY', 'MONGO', mongoose_1.MongooseModule],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map
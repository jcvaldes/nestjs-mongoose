"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const axios_1 = require("@nestjs/axios");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const products_module_1 = require("./products/products.module");
const database_module_1 = require("./database/database.module");
const enviroments_1 = require("./enviroments");
const auth_module_1 = require("./auth/auth.module");
const config_2 = require("./config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                load: [config_2.default],
                isGlobal: true,
                validationSchema: Joi.object({
                    API_KEY: Joi.number().required(),
                    DATABASE_NAME: Joi.string().required(),
                    DATABASE_PORT: Joi.number().required(),
                }),
            }),
            axios_1.HttpModule,
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: 'TASKS',
                useFactory: async (http) => {
                    const tasks = await http
                        .get('https://jsonplaceholder.typicode.com/todos')
                        .toPromise();
                    return tasks.data;
                },
                inject: [axios_1.HttpService],
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
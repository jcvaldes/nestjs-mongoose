import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    newEndpoint(): string;
    hello(): string;
    getTasks(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
}

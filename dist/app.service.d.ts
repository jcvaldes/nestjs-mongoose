import { ConfigType } from '@nestjs/config';
import { Db } from 'mongodb';
import config from './config';
export declare class AppService {
    private tasks;
    private database;
    private configService;
    constructor(tasks: any[], database: Db, configService: ConfigType<typeof config>);
    getHello(): string;
    getTasks(): Promise<any[]>;
}

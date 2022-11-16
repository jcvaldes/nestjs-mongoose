import { Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import config from '../../config';
import { PayloadToken } from '../models/token.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private logger;
    constructor(configService: ConfigType<typeof config>);
    validate(payload: PayloadToken): Promise<PayloadToken>;
}
export {};

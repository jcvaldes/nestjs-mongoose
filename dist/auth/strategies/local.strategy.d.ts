import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    private logger;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
        _id?: any;
        __v?: number;
        id?: any;
        email: string;
        role: string;
    }>;
}
export {};

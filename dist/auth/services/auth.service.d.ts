import { UsersService } from 'src/users/services/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(email: string, password: string): Promise<{
        _id?: any;
        __v?: number;
        id?: any;
        email: string;
        role: string;
    }>;
}

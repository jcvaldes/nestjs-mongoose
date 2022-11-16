import { UsersService } from 'src/users/services/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(email: string, password: string): Promise<{
        [x: string]: any;
        [x: number]: any;
        [x: symbol]: any;
    }>;
}

import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import * as bycrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async validateUser(email: string, password: string) {
    const user: User = (await this.usersService.findByEmail(email)) as User;
    if (user) {
      const isMatch = await bycrypt.compare(password, user.password);
      if (isMatch) {
        const { password, ...rta } = user.toJSON();
        return rta;
      }
    }
    return null;
  }
}

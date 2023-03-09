import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUser } from 'src/Interfaces/user.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
    async validateUser(username: string, password: string): Promise<any> {
        const user:IUser = await this.userService.getUser(username);
        const passwordValid = await bcrypt.compare(password, user.password)

        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }
        if (user && passwordValid) {
            return {
            userId: user._id.toString(),
            userName: user.username,
            };
        }
        return null;
        }
}
import { Body, Controller, Post, Render, Request, Get, Redirect, UseFilters, Response } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { LocalAuthGuard } from 'src/auth/passport/local.authGuard';
import { CreateUserDto } from '../dto/userDto';
import { IUser } from 'src/Interfaces/user.interface';

@Controller('auth')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  
  @Get("/register")
  @Render('register')
  renderRegister() {
    return;
  }

  @Redirect('/')
  @Post('/register')
  async register(
    @Body() {username, password}: CreateUserDto,
    @Response() res
  ) {
    try {
      const saltOrRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltOrRounds);
      const result:IUser = await this.usersService.insertUser(
        username,
        hashedPassword,
      );
      return {
          msg: 'User successfully registered',
          userName: result.username,
          userId: result._id.toString(),
        };
      } catch (error) {
        // res.render("partials/register-error")
      console.log(error)
      }
  }

  @Get('/login')
  @Render('login')
  renderLogin() {
  }

  @UseGuards(LocalAuthGuard)
  @Redirect('/api')
  @Post('/login')
  login(@Request() req, @Response() res): void {
    return req.user
  }
  
  
  @Get('logout')
  @Redirect('..')
  logout(@Request() req): void {
    req.session.destroy();
    return;
  }
}
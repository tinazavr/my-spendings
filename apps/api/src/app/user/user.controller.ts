import {Body, Controller, Get, HttpCode, Post, Req, Res, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { Request, Response } from 'express';
import {User} from './user.shema';

const DAY = 24 * 60 * 60 * 1000;
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('auth')
  @HttpCode(200)
  async signIn(@Res({ passthrough: true }) res: Response, @Body() { email, password }: { email: string; password: string }) {
    const auth = await this.userService.signIn(email, password);
    if (auth) {
      res.cookie('accessToken', auth.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        expires: new Date(Date.now() + DAY),
      }).send();
    }
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return (req as unknown as {user: User}).user;
  }

  @Post('signup')
  async signUp(@Body() { email, password, name }: { email: string; password: string; name: string }) {
    await this.userService.signUp(email, password, name);
    return true;
  }
}

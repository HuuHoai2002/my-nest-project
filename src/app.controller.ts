import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { Role, Roles } from './auth/decorators/roles.decorator';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // console.log(req.user);
    return this.authService.login(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    // console.log(req.user);
    return req.user;
  }

  @Get('test')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async testRole(@Request() req) {
    console.log(req.user);
    return {
      message: 'You have access to this route',
    };
  }
}

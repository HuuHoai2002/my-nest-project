import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  private getRefreshToken(sub: string): string {
    return this.jwtService.sign(
      { sub },
      {
        secret: 'refresh',
        expiresIn: '7d',
      },
    );
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.userId,
      roles: 'admin',
    };
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.getRefreshToken(user.userId),
      ...payload,
    };
  }
}

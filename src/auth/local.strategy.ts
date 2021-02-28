import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {
    super({
      usernameField: 'openid'
    });
  }

  async validate(openid: string): Promise<any> {
    const user = await this.userService.getUserInfoByOpenId(openid);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
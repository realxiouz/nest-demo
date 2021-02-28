import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt'
import { LogService } from 'src/log/log.service';
import { Action } from 'src/log/schemas/log.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly logService: LogService,
  ) {}

  async login(user: any){
    await this.logService.create({
      type: Action.LOGIN,
      uId: user
    })
    return {
      token: this.jwtService.sign(user.id)
    }
  }

  // async profile(id: string) {
  //   await this.userService.
  // }
}

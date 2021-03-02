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
      uId: user._id
    })
    // let d = this.jwtService.verify('1',{
    //   secret: 'hello-world'
    // })
    // console.log(d)
    return {
      token: this.jwtService.sign(user.id)
    }
  }

  validateJwt(token: string) {
    let r
    try {
      r = this.jwtService.verify(token.split(' ')[1], {
        secret: 'hello-world'
      })
      return r
    } catch(e) {
      return {
        message: 'err',
        data: e
      }
    }
    
  }

  // async profile(id: string) {
  //   await this.userService.
  // }
}

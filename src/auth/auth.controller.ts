import { Body, HttpCode, Post, Query, Headers } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ApiBody, ApiProperty } from '@nestjs/swagger';
import axios from 'axios'
import { get } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { AccessTokenApi, ApiConfig, ApiConfigKit, MiniProgramApi, Kits } from 'tnwx'
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}
  
  @Get('code')
  async parseCode(@Query('code') code: string) {

    // let config = new ApiConfig('wxb3e32f7430278c24', '65a585a6eaaeea4e1c53a2e385ba648e', 'test')
    // ApiConfigKit.putApiConfig(config)

    // AccessTokenApi.getAccessToken()

    let r = await MiniProgramApi.code2Session('wxb3e32f7430278c24', '65a585a6eaaeea4e1c53a2e385ba648e', code)
    return r

    // let url = `https://api.weixin.qq.com/sns/jscode2session?appid=wxb3e32f7430278c24&secret=65a585a6eaaeea4e1c53a2e385ba648e&js_code=${code}&grant_type=authorization_code`
    // let res = await axios.get(url)
    // // {
    // //   "session_key": "9GC9Ef6yz9NaT52r7uXgfw==",
    // //   "openid": "otAMh5NE7MONtpB1Q1yzTZjNgups"
    // // }
    // return res.data
  }

  @Post('parseUserInfo')
  @HttpCode(200)
  async parseUserInfo(@Body() body: any, @Headers('session_key') session_key: string) {
    let { encryptedData, iv } = body
    let key = Buffer.from(session_key, 'base64');
    let baseIv = Buffer.from(iv, 'base64');
    
    let ecrypt = Kits.aes128cbcDecrypt(key, baseIv, encryptedData);
    return this.userService.register(JSON.parse(ecrypt))
  }

  @Get('loginByOpenId')
  async loginByOpenId(@Query('openid') openid: string) {
    return await this.userService.getUserInfoByOpenId(openid)
  }

  // @Get('login')
  // async login(){
  //   return this.authService.login()
  // }

  
}

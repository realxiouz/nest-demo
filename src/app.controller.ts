import { Controller, Get, Ip, Param, Post, Query, UseGuards, Request, Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import { query } from 'express';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  // @ApiQuery({ name: 'a', required: true})
  // @ApiParam({ name: 'id', required: true})
  // @Get(':id')
  // getHello( @Query() query, @Param() {id}, @Ip() ip): string {
    
  //   return {
  //     ...query,
  //     id,
  //     ip,
  //   };
  // }

  @Post('test/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @Post('test/jwt')
  @UseGuards(AuthGuard('jwt'))
  async testJwt(@Request() req) {
    return req.user
  }

  @Get('test/users')
  async uses(@Request() req) {
    return await this.userService.getList()
  }

  @Get('test/validateJwt')
  async testValidteJwt(@Headers('Authorization') token: string) {
    return this.authService.validateJwt(token)
  }
}

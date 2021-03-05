import { Controller, Get } from '@nestjs/common';
import { ExpService } from './exp.service';
import { UserBzService } from './user-bz.service';

@Controller('user-bz')
export class UserBzController {

  constructor(
    private readonly userService: UserBzService,
    private readonly expService: ExpService
  ) {}

  @Get('test')
  async allUser() {
    return await this.userService.find()
  }

  @Get('exp')
  async log() {
    return await this.expService.all()
  }
}

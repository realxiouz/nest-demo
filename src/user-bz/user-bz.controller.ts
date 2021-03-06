import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ExpService } from './exp.service';
import { ThirdService } from './third.service';
import { UserBzService } from './user-bz.service';

@Controller('user-bz')
export class UserBzController {

  constructor(
    private readonly userService: UserBzService,
    private readonly expService: ExpService,
    private readonly thirdService: ThirdService,
    private readonly catService: CategoryService,
  ) {}

  @Get('test')
  async allUser() {
    return await this.userService.find()
  }

  @Get('exp')
  async log() {
    return await this.expService.all()
  }

  @Get('exp-new')
  async new() {
    return await this.expService.createExp()
  }

  @Get('third-all')
  async thirdNew() {
    return await this.thirdService.find()
  }

  @Get('cat-all')
  async catAll() {
    return this.catService.getRoot()
  }

  @Get('cat41')
  async cat41() {
    return this.catService.getGoods()
  }
}

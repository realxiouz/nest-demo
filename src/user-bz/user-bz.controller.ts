import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ExpService } from './exp.service';
import { ThirdService } from './third.service';
import { UserBzService } from './user-bz.service';
import { CartService } from './cart.service';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('bz')
@ApiTags('81兵站')
export class UserBzController {

  constructor(
    private readonly userService: UserBzService,
    private readonly expService: ExpService,
    private readonly thirdService: ThirdService,
    private readonly catService: CategoryService,
    private readonly cartService: CartService,
  ) {}

  @Get('basicInfo')
  @ApiQuery({
    name: 'id',
    description: 'uid'
  })
  async basicInfo(@Query('id') uid=234) {
    return await this.userService.basicInfo(uid)
  }

  @Get('exp')
  async log() {
    return await this.expService.all()
  }

  @Get('expByUid/:uid')
  @ApiParam({
    name: 'uid',
    description: 'user id'
  })
  async expByQb(@Param('uid') uid) {
    return await this.expService.allByQb(uid)
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

  @Get('cat-qb')
  async catAllBYQb() {
    return this.catService.getRootByQb()
  }

  @Get('cat41')
  async cat41() {
    return this.catService.getGoods()
  }

  @Get('cart')
  async cart() {
    return this.cartService.getCartByUid()
  }
}

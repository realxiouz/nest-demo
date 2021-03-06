import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/entity/81cart.entity';
import { Category } from 'src/entity/81category.entity';
import { Exp } from 'src/entity/81exp.entity';
import { Third } from 'src/entity/81third.entity';
import { BzUser } from 'src/entity/81user.entity';
import { CartService } from './cart.service';
import { CategoryService } from './category.service';
import { ExpService } from './exp.service';
import { ThirdService } from './third.service';
import { UserBzController } from './user-bz.controller';
import { UserBzService } from './user-bz.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BzUser,
      Exp,
      Third,
      Category,
      Cart,
    ])
  ],
  controllers: [UserBzController],
  providers: [UserBzService, ExpService, ThirdService, CategoryService, CartService,]
})
export class UserBzModule {}

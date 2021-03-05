import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exp } from 'src/entity/81exp.entity';
import { Third } from 'src/entity/81third.entity';
import { BzUser } from 'src/entity/81user.entity';
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
    ])
  ],
  controllers: [UserBzController],
  providers: [UserBzService, ExpService, ThirdService]
})
export class UserBzModule {}

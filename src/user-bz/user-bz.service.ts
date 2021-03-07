import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BzUser } from 'src/entity/81user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserBzService {

  constructor(
    @InjectRepository(BzUser)
    private readonly userRepository: Repository<BzUser>
  ){}

  async find() {
    return this.userRepository.find({
      select: ['token', 'name', 'avatar', 'uid'],
      relations: ['third'],
      where: {
        uid:234
      }
    })
  }

  // async testBuild() {
  //   return await this.userRepository
  //     .createQueryBuilder('user')
  //     .
  // }
}

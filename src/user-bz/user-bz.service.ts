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
      relations: ['third']
    })
  }

  
}

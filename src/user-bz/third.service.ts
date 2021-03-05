import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exp } from 'src/entity/81exp.entity';
import { Third } from 'src/entity/81third.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ThirdService {
  constructor(
    @InjectRepository(Third)
    private readonly thirdRep: Repository<Third> 
  ) {}

  async find() {
    return await this.thirdRep.find({
      relations: ['user']
    })
  }
}

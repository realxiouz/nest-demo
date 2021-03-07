import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exp } from 'src/entity/81exp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpService {
  constructor(
    @InjectRepository(Exp)
    private readonly expRep: Repository<Exp> 
  ) {}

  async all() {
    return await this.expRep.find({
      // select: ['type'],
      relations: ['user'],
      // join: {
      //   alias: 'user',
      //   leftJoinAndSelect: {
      //     name: 'user.name'
      //   }
      // },
      take: 10,
      skip: 10,
    })
  }

  async createExp() {
    let exp: Exp = new Exp()
    exp.uid = 1
    return await this.expRep.save(exp)
  }
}

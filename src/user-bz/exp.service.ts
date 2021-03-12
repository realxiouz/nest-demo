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
      relations: ['user'],
      // select: ['id',],
      take: 10,
      skip: 10,
    })
  }

  async allByQb(uid) {
    return await this.expRep.createQueryBuilder('exp')
      .leftJoinAndSelect('exp.user', 'user')
      .select([
        'exp.type',
        'user.name',
        'user.last_login'
      ])
      .where({
        uid,
      })
      .getMany()
  }

  async createExp() {
    let exp: Exp = new Exp()
    exp.uid = 1
    return await this.expRep.save(exp)
  }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/entity/81category.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private readonly catRep: Repository<Category>
  ) {}

  async getRoot() {
    return await this.catRep.find({
      where: {
        pid: 0,
        is_show: 1,
      },
      relations: ['sub', 'parent']
    })
  }

  async getRootByQb() {
   return await this.catRep.createQueryBuilder('cat')
    .leftJoinAndSelect("cat.sub", "category")
    .leftJoinAndSelect('cat.parent', 'parent')
    .where('cat.is_show=:is_show', {is_show: 1})
    .andWhere('cat.pid=:pid', {pid: 0})
    .andWhere('category.is_show=:is_show', {is_show: 1})
    .getMany()
  }

  async getGoods() {
    return await this.catRep.findAndCount({
      // where: {
      //   id: 41,
      // },
      relations: ['goods'],
    })
  }
}
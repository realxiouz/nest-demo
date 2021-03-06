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
      },
      relations: ['sub']
    })
  }

  async getGoods() {
    return await this.catRep.findAndCount({
      where: {
        id: 41,
      },
      relations: ['goods'],
    })
  }
}
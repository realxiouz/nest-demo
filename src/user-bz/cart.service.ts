import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "src/entity/81Cart.entity";
import { Repository } from "typeorm";

@Injectable()
export class CartService {

  constructor(
    @InjectRepository(Cart)
    private readonly cartRep: Repository<Cart>
  ) {}

  async getCartByUid(user_id = 234) {
    let carts = await this.cartRep.find({
      where: {
        user_id,
      },
      relations: ['goods']
    })
    let arr = []
    for(let i = 0; i < carts.length; i++) {
      if (arr.findIndex(a => a.shop_id == carts[i].shop_id) == -1) {
        arr.push({
          shop_id: carts[i].shop_id,
          shop_name: carts[i].shop_name,
          list: []
        })
      }
      let inx = arr.findIndex(a => a.shop_id == carts[i].shop_id)
      arr[inx].list.push(carts[i])
    }
    return arr
  }
  
}
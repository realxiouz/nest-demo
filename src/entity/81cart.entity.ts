import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Goods } from "./81goods.entity";

// export enum CartStatus {

// }

@Entity({
  name: '81_cart_item'
})
export class Cart {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: number

  @Column()
  sku: string

  @OneToOne(_ => Goods)
  @JoinColumn({
    name: 'sku',
    referencedColumnName: 'sku'
  })
  goods: Goods

  @Column()
  shop_id: number

  @Column()
  shop_name: string

  @Column()
  amount: number

  @Column()
  price: number

  @Column()
  status: number

}
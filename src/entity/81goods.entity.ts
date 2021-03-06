import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./81category.entity";


@Entity({
  name: '81_product'
})
export class Goods {

  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number

  @Column()
  name: string

  @Column()
  sku: string

  @Column()
  cid: number

  @Column()
  is_show: number

  @Column()
  status: number

  @Column()
  stock: number

  @ManyToOne(_ => Category)
  @JoinColumn({
    name: 'cid',
    referencedColumnName: 'id'
  })
  category: Category
}
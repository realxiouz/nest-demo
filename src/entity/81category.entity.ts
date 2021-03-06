import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Goods } from "./81goods.entity";


@Entity({
  name: '81_product_categories'
})
export class Category {

  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number

  @Column()
  name: string

  @Column({
    type: 'bigint'
  })
  pid: number

  @OneToMany(_ => Category, category => category.parent)
  @JoinColumn({
    name: 'id',
    referencedColumnName: 'pid'
  })
  sub: Category[]

  @OneToOne(_ => Category, category => category.sub)
  @JoinColumn({
    name: 'pid',
    referencedColumnName: 'id'
  })
  parent: Category

  @OneToMany(_ => Goods, goods => goods.category)
  goods: Goods[]
}
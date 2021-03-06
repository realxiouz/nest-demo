import { clearScreenDown } from "readline";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BzUser } from "./81user.entity";

@Entity({
  name: '81_user_third_open_id'
})
export class Third {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  uid: number

  @Column()
  open_id: string

  @Column()
  union_id: string

  @Column()
  session_key: string

  @ManyToOne(_ => BzUser, user => user.third)
  @JoinColumn({
    name: 'uid',
    referencedColumnName: 'uid'
  })
  user: BzUser
}
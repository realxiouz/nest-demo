import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BzUser } from "./81user.entity";


@Entity({
  name: '81_user_exp_log'
})
export class Exp {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @Column()
    operate: string

    @Column()
    exp: number

    @Column()
    total: number

    @Column()
    remark: string

    @Column()
    updated_at: number

    @Column()
    created_at: number

    @ManyToOne(_ => BzUser)
    @JoinColumn({
      name: 'uid',
      referencedColumnName: 'uid'
    })
    user: BzUser

    @Column()
    uid: number

    // @ManyToOne(_ => BzUser)
    // user: BzUser
}
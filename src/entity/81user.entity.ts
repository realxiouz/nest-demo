import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Third } from "./81third.entity";

export enum UserType {
  NORMAL = 0,
  SOLDIER = 1
}

export enum UserSex {
  SECRECT = 0,
  MALE = 1,
  FEMALE = 2
}

export enum UserStatus {
  FORBIDEN = 0,
  NORMAL = 1,
}

@Entity({
  name: '81_users'
})
export class BzUser {

  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  avatar: string

  @Column({select: false})
  tel: string

  @Column({select: false})
  inviteCode: string

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.NORMAL
  })
  identity: number

  @Column({
    nullable: false
  })
  uid: number

  @Column({select: false})
  token: string

  @Column({
    type: 'enum',
    enum: UserSex,
    default: UserSex.SECRECT
  })
  sex: number

  @Column()
  birthday: Date

  @Column()
  exp: number

  @Column()
  level: number

  @Column()
  credit: number

  @Column()
  province: number

  @Column()
  city: string

  @Column()
  total_consumption: number

  @Column({
    type: 'enum',
    enum: UserStatus
  })
  status: number

  @Column({select: false})
  last_login: number

  @Column({select: false})
  created_at: number

  @Column({select: false})
  updated_at: number

  @OneToMany(_ => Third,  third => third.user)
  @JoinColumn({
    name: 'uid',
    referencedColumnName: 'uid',
  })
  third: Third[]
}
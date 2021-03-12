import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: '81_shipping_address'
})
export class Address {
  
  @PrimaryGeneratedColumn()
  id: number
}
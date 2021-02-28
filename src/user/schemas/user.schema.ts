import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
  versionKey: false
})
export class User {
  @Prop()
  @ApiProperty({name: 'nickName'})
  nickName: string

  @Prop()
  avatarUrl: string

  @Prop()
  openId: string

  @Prop({ unique: true})
  unionId: string

  @Prop()
  phoneNumber: number

  @Prop()
  gender: number

  @Prop()
  province: string

  @Prop()
  city: string

  @Prop()
  country: string

}

export const UserSchema = SchemaFactory.createForClass(User);
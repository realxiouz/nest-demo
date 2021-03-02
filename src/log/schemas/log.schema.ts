import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type LogDocument = Log & Document;

export enum Action {
  LOGIN = 'login'
}

@Schema({
  timestamps: false,
  versionKey: false
})
export class Log {
  
  @Prop({type: Date, default: Date.now()})
  time?: Date

  @Prop({ref: _ => User, type: Types._ObjectId})
  uId: string

  @Prop(
    { select: true }
  )
  type: Action

}

export const LogSchema = SchemaFactory.createForClass(Log);
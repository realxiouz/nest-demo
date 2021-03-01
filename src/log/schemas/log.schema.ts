import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose'
import { User } from 'src/user/schemas/user.schema';

export type LogDocument = Log & Document;

export enum Action {
  LOGIN = 'login'
}

@Schema({
  timestamps: false,
  versionKey: false,
  toJSON:{
    virtuals: true
  }
})
export class Log {
  
  @Prop({type: Date, default: Date.now()})
  time?: Date

  @Prop({ref: _ => 'User', type: mongoose.Schema.Types.ObjectId})
  uId: User

  @Prop(
    { select: true }
  )
  type: Action

}

export const LogSchema = SchemaFactory.createForClass(Log);
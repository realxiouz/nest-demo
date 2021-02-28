import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { Log, LogDocument } from './schemas/log.schema';

@Injectable()
export class LogService {
  constructor(
    @InjectModel(Log.name) private readonly logModel: Model<LogDocument>
  ){}

  async create(log: Log) {
    return await this.logModel.create(log)
  }

  async list(uId){
    return await this.logModel.find().exec()
    // return await this.logModel.find({uId}).populate('User').exec()
  }
}

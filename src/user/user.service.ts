import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModal: Model<UserDocument>){}

  async register(user: User) {
    let u = await this.userModal.findOne({openId: user.openId}).exec()
    if (u) {
      return {
        msg: '用户已存在'
      }
    } else {
      return await this.userModal.create(user)
    }
  }

  async getUserInfoByOpenId(openId: string) {
    let r = await this.userModal.findOne({openId}).exec()
    return r
  }

  async getList() {
    return await this.userModal.find({nickName: {$regex: 'Q'}}).count()  
  }
}

import { Injectable } from '@nestjs/common';
import axios from 'axios';
// import { sha256 } from 'crypto-js'
// import sha256 from 'crypto-js/sha256'
let SHA256 = require("crypto-js/sha256")

export const GETUI = {
  AppID: 'pd9glEL8IARCAbCJWI9d6',
  AppKey: 'dvWef2RZIH7SKvZARpQBl4',
  AppSecret: 'WIPQCknT6g5Qn6eGW7vZe7',
  MasterSecret:'vkwwfhdExN6KvYnrM11S25',
  BaseUrl: `https://restapi.getui.com/v2/pd9glEL8IARCAbCJWI9d6`
}

@Injectable()
export class PushService {

  async getGetuiToken() {
    let timestamp = new Date().valueOf()
    console.log(`${GETUI.AppKey}${timestamp}${GETUI.MasterSecret}`)
    let sign = SHA256(`${GETUI.AppKey}${timestamp}${GETUI.MasterSecret}`)
    console.log(sign)
    let d = {
      sign: '993657A77DDDC8250EDD76A758D3DB0F0EA46A0FF3C5AD84D97271A201FE5C62',
      timestamp,
      appkey: GETUI.AppKey
    }
    console.log(d)
    axios.post(`${GETUI.BaseUrl}/auth`, d)
      .then(r => {
        return r.data
      })
      .catch(e => {
        console.log(e)
        return e
      })
  }
}

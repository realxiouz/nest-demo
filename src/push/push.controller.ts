import { Controller, Get } from '@nestjs/common';
import { PushService } from './push.service';

@Controller('push')
export class PushController {
  constructor(
    private readonly pushService: PushService
  ) {}
  @Get('token')
  async getToken() {
    return this.pushService.getGetuiToken()
  }
}

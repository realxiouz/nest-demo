import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(
    private readonly logService: LogService
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async list(@Req() req) {
    let id = req.user.id
    return await this.logService.list(req.user)
  }
}

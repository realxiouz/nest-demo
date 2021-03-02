import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(
    private readonly authService: AuthService
  ) {}
  use(req: any, res: any, next: () => void) {
    let d = req.headers.authorization ? this.authService.validateJwt(req.headers.authorization) : null
    req.uid = d
    next();
  }
}

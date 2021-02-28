import { Module, Global } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './local.strategy'
import { JWTStrategy } from './jwt.strastegy';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'hello-world',
      // signOptions: { expiresIn: 120 },
    }),
    PassportModule,
    LogModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JWTStrategy
  ],
  exports: [
    AuthService
  ]
})
export class AuthModule {}

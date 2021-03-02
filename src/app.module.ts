import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose'
import { LogModule } from './log/log.module';
import { UserMiddleware } from './common/middleware/user.middleware';
// import { mongoose } from '@typegoose/typegoose' 
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/shop'),
    UserModule,
    AuthModule,
    LogModule,
  ],
  providers: [AppService],
  controllers: [
    AppController,
  ]
})
export class AppModule implements NestModule {
  
  configure(con: MiddlewareConsumer) {
    con.apply(
      UserMiddleware,
    )
  }
}

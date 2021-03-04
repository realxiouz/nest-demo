import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose'
import { LogModule } from './log/log.module';
import { UserMiddleware } from './common/middleware/user.middleware';
import { ConfigModule } from '@nestjs/config'
// import { mongoose } from '@typegoose/typegoose' 
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.MONGO_RUI,
          pass: process.env.MONGO_PASS,
        }
      }
    }),
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
    ).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}

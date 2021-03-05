import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose'
import { LogModule } from './log/log.module';
import { UserMiddleware } from './common/middleware/user.middleware';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
// import { mongoose } from '@typegoose/typegoose' 
import { UserBzModule } from './user-bz/user-bz.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.MONGO_RUI,
          // pass: process.env.MONGO_PASS,
        }
      }
    }),
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'mysql',
          host: process.env.MYSQL_HOST,
          port: parseInt(process.env.MYSQL_PORT),
          username: process.env.MYSQL_USER_NAME,
          password: process.env.MYSQL_PASSWORD,
          entities: [ path.join(__dirname, './entity/*.entity{.ts,.js}') ],
          database: '81_shop'
        }
      }
    }),
    UserModule,
    AuthModule,
    LogModule,
    UserBzModule,
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

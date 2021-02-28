import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogService } from './log.service';
import { Log, LogSchema } from './schemas/log.schema';
import { LogController } from './log.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Log.name, schema: LogSchema}
    ]),
  ],
  providers: [LogService],
  exports: [LogService],
  controllers: [LogController]
})
export class LogModule {}

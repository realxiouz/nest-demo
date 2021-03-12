import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { UserMiddleware } from './common/middleware/user.middleware';
import { GlobalFilter } from './common/filter/global-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const secondOptions = new DocumentBuilder()
    .setTitle('Dogs example')
    .setDescription('The dogs API description')
    .setVersion('1.0')
    .build();
  const dogDocument = SwaggerModule.createDocument(app, secondOptions);
  SwaggerModule.setup('api-doc', app, dogDocument);

  // app.useGlobalFilters(new GlobalFilter())

  await app.listen(3000);
}
bootstrap();
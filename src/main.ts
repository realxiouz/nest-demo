import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const secondOptions = new DocumentBuilder()
    .setTitle('Dogs example')
    .setDescription('The dogs API description')
    .setVersion('1.0')
    .build();

  const dogDocument = SwaggerModule.createDocument(app, secondOptions);
  SwaggerModule.setup('api-doc', app, dogDocument);
  await app.listen(3000);
}
bootstrap();
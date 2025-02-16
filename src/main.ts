import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('NODE_ENV', process.env.NODE_ENV);
  console.log('PORT', process.env.PORT);

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(process.env.PORT ?? 8000);
}

bootstrap();

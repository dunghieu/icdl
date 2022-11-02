import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/main/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT, () => {
    Logger.log(`Server is running on port ${process.env.PORT}`);
  });
}
bootstrap();

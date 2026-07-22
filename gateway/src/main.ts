import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { authProxy } from './middlewares/proxy';
import { AppLogger } from './common/app-logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger(),
  });
  app.use('/auth', authProxy);
  const port = process.env.PORT ?? 8000;
  await app.listen(port);
  Logger.log(`Gateway started on port ${port}`, 'Bootstrap');
}
void bootstrap();

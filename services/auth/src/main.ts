import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectDB } from './config/db';
import { connectFirebase } from './config/firebase';
import { AppLogger } from './common/app-logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger(),
  });
  await connectDB();
  connectFirebase();
  const port = process.env.PORT ?? 8001;
  await app.listen(port);
  Logger.log(`Auth service started on port ${port}`, 'Bootstrap');
}
void bootstrap();

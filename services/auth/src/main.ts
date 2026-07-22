import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectDB } from './config/db';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connectDB();
  const port = process.env.PORT ?? 8001;
  await app.listen(port);
  Logger.log(`Auth service started on port ${port}`, 'Bootstrap');
}
void bootstrap();

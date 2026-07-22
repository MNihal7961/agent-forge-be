import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';

const logger = new Logger('Database');

export async function connectDB(): Promise<void> {
  const uri = process.env.MONGO_DB_URI;
  if (!uri) {
    throw new Error('MONGO_DB_URI is not set in the environment');
  }

  await mongoose.connect(uri);
  logger.log('Auth service Connected to MongoDB');
}

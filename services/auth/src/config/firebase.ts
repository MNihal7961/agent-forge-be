import { join } from 'path';
import { Logger } from '@nestjs/common';
import { initializeApp, cert } from 'firebase-admin/app';

const logger = new Logger('Firebase');

export function connectFirebase() {
  const serviceAccountPath = join(process.cwd(), 'src/serviceAccountKey.json');

  const firebaseApp = initializeApp({
    credential: cert(serviceAccountPath),
  });

  logger.log('Auth service Connected to Firebase');

  return firebaseApp;
}

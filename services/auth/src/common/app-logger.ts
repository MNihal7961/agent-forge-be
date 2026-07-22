import { ConsoleLogger } from '@nestjs/common';

const SUPPRESSED_CONTEXTS = new Set([
  'NestFactory',
  'InstanceLoader',
  'RoutesResolver',
  'RouterExplorer',
  'NestApplication',
]);

export class AppLogger extends ConsoleLogger {
  log(message: unknown, context?: string) {
    if (context && SUPPRESSED_CONTEXTS.has(context)) {
      return;
    }
    super.log(message, context);
  }
}

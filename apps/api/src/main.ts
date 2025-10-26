import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log('Server is running on port 3000');
  })
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  });

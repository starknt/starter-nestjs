import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import PrimaService from './services/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrimaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}
bootstrap();

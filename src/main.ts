import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import PrimaService from './services/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const host = configService.get('environment.host')
  const port = configService.get('environment.port')

  const prismaService = app.get(PrimaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(port, host);

  console.log(`\x1b[93m Run in http://${host}:${port}`)
}
bootstrap();

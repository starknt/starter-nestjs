import { PrismaClient } from '@prisma/client';
import { INestApplication, OnModuleInit } from '@nestjs/common';

export default class PrimaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

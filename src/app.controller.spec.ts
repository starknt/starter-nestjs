import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './services/post.service';
import PrimaService from './services/prisma.service';
import UserService from './services/user.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, UserService, PostService, PrimaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('Post', async () => {
      expect(await appController.getPublishedPosts()).toStrictEqual([]);
    });
  });
});

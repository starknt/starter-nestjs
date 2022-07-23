import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './services/post.service';
import PrimaService from './services/prisma.service';
import UserSerivce from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrimaService, PostService, UserSerivce],
})
export class AppModule { }

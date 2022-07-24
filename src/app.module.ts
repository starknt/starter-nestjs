import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './services/post.service';
import PrimaService from './services/prisma.service';
import UserSerivce from './services/user.service';
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './config/env.schema';
import { configurations } from './config';
import fs from 'fs'

const envPath = fs.existsSync(`${process.env.NODE_ENV || 'development'}.env`) ? `${process.env.NODE_ENV || 'development'}.env` : '.env'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: envPath,
      validationSchema: envSchema,
      load: configurations,
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrimaService, PostService, UserSerivce],
})
export class AppModule { }

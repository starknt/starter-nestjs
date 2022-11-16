import { Module } from '@nestjs/common';
import { MailerModule, MailerOptions } from '@nestjs-modules/mailer'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './services/post.service';
import PrimaService from './services/prisma.service';
import UserService from './services/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
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
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get<MailerOptions>('mailer')
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrimaService, PostService, UserService],
})
export class AppModule { }

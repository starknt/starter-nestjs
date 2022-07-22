import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrimaService from './prisma.service';

@Injectable()
export default class UserSerivce {
  constructor(private prismaService: PrimaService) { }

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUnique({
      where: userWhereUniqueInput,
    });
  }
}

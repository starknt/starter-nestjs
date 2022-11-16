import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrimaService from './prisma.service';

@Injectable()
export default class UserService {
  constructor(private prismaService: PrimaService) { }

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: Prisma.UserFindManyArgs) {
    return this.prismaService.user.findMany(params)
  }

  async createUser(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({
      data
    })
  }

  async deleteUser(params: Prisma.UserDeleteArgs) {
    return this.prismaService.user.delete(params)
  }

  async updateUser(params: Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(params)
  }
}

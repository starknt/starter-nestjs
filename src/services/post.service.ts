import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import PrimaService from "./prisma.service";

@Injectable()
export class PostService {
    constructor(private prismaService: PrimaService) { }

    post(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
        return this.prismaService.post.findUnique({ where: postWhereUniqueInput })
    }
}
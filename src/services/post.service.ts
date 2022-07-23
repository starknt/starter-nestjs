import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import PrimaService from "./prisma.service";

@Injectable()
export class PostService {
    constructor(private prismaService: PrimaService) { }

    post(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
        return this.prismaService.post.findUnique({ where: postWhereUniqueInput })
    }

    posts(params: Prisma.PostFindManyArgs) {
        return this.prismaService.post.findMany(params)
    }

    createPost(data: Prisma.PostCreateInput) {
        return this.prismaService.post.create({
            data
        })
    }

    updatePost(params: Prisma.PostUpdateArgs) {
        return this.prismaService.post.update(params)
    }

    deletePost(where: Prisma.PostWhereUniqueInput) {
        return this.prismaService.post.delete({
            where
        })
    }
}
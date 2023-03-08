import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../users-repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async getAll(): Promise<User[]> {
    return await this.prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async create(name: string, userFunction: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        name,
        function: userFunction,
      },
    });
  }
}

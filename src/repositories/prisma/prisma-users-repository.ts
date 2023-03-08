import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../users-repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, userFunction: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        name,
        function: userFunction,
      },
    });
  }
}

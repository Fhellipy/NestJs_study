import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTeamUserBody } from './dtos/create-team-users-body';
import { UsersRepository } from './repositories/users-repository';

@Controller('users')
export class AppController {
  constructor(private usersRepository: UsersRepository) {}

  @Get()
  async getUsers() {
    const users = await this.usersRepository.getAll();

    return { users };
  }

  @Post()
  async createUser(@Body() body: CreateTeamUserBody) {
    const { name, function: userFunction } = body;

    await this.usersRepository.create(name, userFunction);

    return {
      success: true,
      message: 'user registered successfully!',
    };
  }
}

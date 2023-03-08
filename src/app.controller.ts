import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamUserBody } from './dtos/create-team-users-body';
import { UsersRepository } from './repositories/users-repository';

@Controller()
export class AppController {
  constructor(private usersRepository: UsersRepository) {}

  @Post('user')
  async createUser(@Body() body: CreateTeamUserBody) {
    const { name, function: userFunction } = body;

    await this.usersRepository.create(name, userFunction);

    return {
      success: true,
      message: 'user registered successfully!',
    };
  }
}

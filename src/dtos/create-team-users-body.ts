import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamUserBody {
  @IsNotEmpty({ message: 'The user name should not be empty.' })
  @Length(5, 100)
  name: string;

  @IsNotEmpty({ message: 'The user function should not be empty.' })
  function: string;
}

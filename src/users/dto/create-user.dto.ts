import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(4)
  username: string;

  @IsNotEmpty()
  @MinLength(3)
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  refreshToken: string;
}

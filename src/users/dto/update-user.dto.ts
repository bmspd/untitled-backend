import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @MinLength(4)
  @IsOptional()
  username?: string;

  @IsNotEmpty()
  @MinLength(3)
  @IsOptional()
  email?: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsOptional()
  password?: string;

  refreshToken?: string;
}

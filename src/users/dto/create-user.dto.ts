import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly id: number;
  @IsNotEmpty()
  readonly name: string;
}

import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  readonly id: number;
  readonly name: string;
  readonly email: string;
}

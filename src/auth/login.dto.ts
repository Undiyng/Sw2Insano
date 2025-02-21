import { ApiProperty } from '@nestjs/swagger';

export class loginDto {
  @ApiProperty()
  _id: object;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
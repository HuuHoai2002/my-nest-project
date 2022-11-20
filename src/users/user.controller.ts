import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  create(@Body() user: CreateUserDto) {
    // console.log('running create method in user controller');
    return {
      message: 'User created',
      user,
    };
  }

  @Post('requests')
  request(@Req() request: Request) {
    console.log(request.headers);
    return {
      message: 'Request created',
    };
  }

  @Post('responses')
  response(@Res() response: Response) {
    console.log(response);
    return {
      message: 'Response created',
    };
  }
}

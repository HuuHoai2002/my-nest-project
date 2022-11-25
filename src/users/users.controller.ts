import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from './decorators/roles.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from './guards/roles.guard';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(id);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }

  @Put('update')
  @UsePipes(new ValidationPipe())
  async update(@Body() user: UpdateUserDto) {
    return await this.userService.update(user);
  }

  @Delete('delete/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.remove(id);
  }

  @Post('test')
  @Roles('admin')
  @UseGuards(RolesGuard)
  async test() {
    return ['admin'];
  }
}

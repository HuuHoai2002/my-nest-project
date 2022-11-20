import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('controller')
export class AppController {
  // vừa khai báo vừa khởi tạo
  // dependency injection: là một kĩ thuật trong lập trình hướng đối tượng, cho phép một đối tượng (hay thực thể) có thể nhúng (hoặc chèn) các đối tượng khác vào trong nó.
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id')
  getController(@Param() param: string, @Query() query: string) {
    console.log(param, query);
    return {
      message: 'Hello from controller',
      param,
      query,
    };
  }
  // result: http://localhost:3000/controller/1?name=John => { message: 'Hello from controller', param: {id: 1}, query: 'John' }
  @Post('/:id')
  postController(@Param() param: string, @Query() query: string) {
    console.log(param, query);
    return {
      message: 'Hello from controller',
      param,
      query,
    };
  }
  // result: http://localhost:3000/controller/1?name=John => { message: 'Hello from controller', param: {id: 1}, query: 'John' }
}

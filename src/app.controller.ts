import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('controller/:id')
  getController(@Param() param: string, @Query() query: string) {
    console.log(param, query);
    return {
      message: 'Hello from controller',
      param,
      query,
    };
  }
  // result: http://localhost:3000/controller/1?name=John => { message: 'Hello from controller', param: {id: 1}, query: 'John' }
  @Post('controller/:id')
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

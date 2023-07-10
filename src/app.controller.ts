import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest() {
    return {
      name: "Nghiêm Hữu Hoài",
      id: "2021050273",
      class_id: "DCCTOM65C"
    }
  }
}

import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserMiddleware } from './middlewares/user.middleware';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.POST,
      },
      {
        path: 'users/create',
        method: RequestMethod.POST,
      },
    );
  }
}

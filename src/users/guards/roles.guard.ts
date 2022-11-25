import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // truy xuất metadata từ @Roles voi key là 'roles'
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    // console.log(context.getClass()); // UserController
    // console.log(context.getHandler()); // [AsyncFunction: test]
    if (!roles) {
      return true;
    }
    // const request = context.switchToHttp().getRequest();
    // console.log(request.headers);
    if (roles.includes('admin')) {
      return true;
    }
  }
}

import { CustomDecorator, SetMetadata } from '@nestjs/common';

export enum Role {
  User = 'user',
  Admin = 'admin',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]): CustomDecorator =>
  SetMetadata(ROLES_KEY, roles);

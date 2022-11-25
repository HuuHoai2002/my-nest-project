import { UserMiddleware } from './users.middleware';

describe('UserMiddleware', () => {
  it('should be defined', () => {
    expect(new UserMiddleware()).toBeDefined();
  });
});

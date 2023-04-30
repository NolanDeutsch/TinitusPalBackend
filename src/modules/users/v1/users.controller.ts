import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'common/decorators/user.decorator';
import { AuthUser } from 'common/types/superbase.types';

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('summery')
  async getUserSummery(@User() user: AuthUser) {
    return this.usersService.getUserSummery(user.sub);
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id/summery')
  async getSummery(@Param('id') id: string) {
    return this.usersService.getSummery(id);
  }
}

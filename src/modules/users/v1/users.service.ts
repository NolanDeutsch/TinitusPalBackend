import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SuperbaseService } from 'modules/supabse/supabse.service';

@Injectable()
export class UsersService {
  constructor(public readonly superbaseService: SuperbaseService) {}

  async getUserSummery(userId: string) {
    const { data, error } = await this.superbaseService.getClient().from('users').select('').eq('id', userId);
    if (error) {
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }
}

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SuperbaseService } from 'modules/supabse/supabse.service';

@Injectable()
export class SymptomsService {
  constructor(private readonly superbaseService: SuperbaseService) {}

  async getByUserId(userId: string) {
    const { data, error } = await this.superbaseService
      .getClient()
      .from('user_symptoms', )
      .select('id, value, symptom: symptoms(id, name), causes')
      .or('value->left.gt.0, value->right.gt.0, value->value.gt.0, value->value.eq.true')
      .eq('userId', userId);
    if (error) {
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }
}

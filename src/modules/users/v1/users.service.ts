import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { head } from 'lodash';
import { SuperbaseService } from 'modules/supabse/supabse.service';
import { SymptomsService } from 'modules/symptoms/v1/symptoms.service';

@Injectable()
export class UsersService {
  constructor(public readonly superbaseService: SuperbaseService, private readonly symptomsService: SymptomsService) {}

  async getUserSummery(userId: string) {
    const { data, error } = await this.superbaseService.getClient().from('users').select('*').eq('id', userId);
    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    const symptoms = await this.symptomsService.getByUserId(userId);
    // TODO add types
    const formattedSymptoms = symptoms.map((symptom: any) => ({ ...symptom, name: symptom.symptom.name }));

    return { user: head(data), symptoms: formattedSymptoms };
  }
}

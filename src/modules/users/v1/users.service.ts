import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { head } from 'lodash';
import { SuperbaseService } from 'modules/supabse/supabse.service';
import { SymptomsService } from 'modules/symptoms/v1/symptoms.service';

@Injectable()
export class UsersService {
  constructor(public readonly superbaseService: SuperbaseService, private readonly symptomsService: SymptomsService) {}

  async getSummery(userId: string) {
    const { data, error } = await this.superbaseService.getClient().from('users').select('*').eq('id', userId);
    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    const user = head(data);
    if (!user) throw new NotFoundException('User not found');

    const symptoms = await this.symptomsService.getByUserId(userId);
    // TODO add types
    const formattedSymptoms = symptoms.map((symptom: any) => ({ ...symptom, name: symptom.symptom.name }));

    if (user.hideLocationAge) {
      delete user.location;
      delete user.age;
    }

    delete user.email;

    user.name = `${user.firstName} ${user.lastName}`;
    return { user, symptoms: formattedSymptoms };
  }
}

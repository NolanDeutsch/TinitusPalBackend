import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SuperbaseService } from 'modules/supabse/supabse.service';
import { Notification } from 'common/types/notifications.type';

@Injectable()
export class NotificationsService {
  constructor(public readonly superbaseService: SuperbaseService) {}

  async create(notification: Partial<Notification>) {
    const { data, error } = await this.superbaseService
      .getClient()
      .from('notifications')
      .insert(notification)
      .select()
      .single();
    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }

  async createMany(notifications: Partial<Notification>[]) {
    const { data, error } = await this.superbaseService
      .getClient()
      .from('notifications')
      .insert(notifications)
      .select();

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }
}

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SuperbaseService } from 'modules/supabse/supabse.service';
import { CreateLiveStreamDto } from './dto/create-live-stream.dto';
import { NotificationsService } from 'modules/notifications/v1/notifications.service';
import { UsersService } from 'modules/users/v1/users.service';
import { NotificationType } from 'common/enums/notification-type.enums';

@Injectable()
export class LiveStreamsService {
  constructor(
    public readonly superbaseService: SuperbaseService,
    public readonly notificationsService: NotificationsService,
    public readonly usersService: UsersService,
  ) {}

  async create(createLiveStreamDto: CreateLiveStreamDto) {
    const { data, error } = await this.superbaseService
      .getClient()
      .from('live_streams')
      .insert(createLiveStreamDto)
      .select()
      .single();
    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    const users = await this.usersService.getAll();
    await this.notificationsService.createMany(
      users.map((user) => ({
        userId: user.id,
        type: NotificationType.NEW_LIVE_STREAM,
        url: `/live-stream?id=${data.id}`,
      })),
    );

    return data;
  }
}

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { head, isEmpty } from 'lodash';
import { SuperbaseService } from 'modules/supabse/supabse.service';
import { CreatePostDto } from './dto/create-post.dto';
import { NotificationType } from 'common/enums/notification-type.enums';
import { NotificationsService } from 'modules/notifications/v1/notifications.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly superbaseService: SuperbaseService,
    public readonly notificationsService: NotificationsService,
  ) {}

  async getById(id: number) {
    const { data, error } = await this.superbaseService
      .getClient()
      .from('posts')
      .select('id, content, media, userId, groupId: postGroupId')
      .eq('id', id);
    if (error) {
      throw new InternalServerErrorException(error.message);
    }
    return head(data);
  }

  async create(userId: string, createPostDto: CreatePostDto) {
    const { data, error } = await this.superbaseService
      .getClient()
      .from('posts')
      .insert({ userId, ...createPostDto })
      .select()
      .single();
    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    const content = JSON.parse(createPostDto.content);
    const mentions = content.root.children[0].children.filter((item: any) => item.type === 'mention');
    const mentionIds = mentions.map((mention: any) => mention.mention.id);

    if (!isEmpty(mentionIds)) {
      const notifications = [];
      mentionIds.forEach((mentionId: string) => {
        notifications.push({
          userId: mentionId,
          notifierId: userId,
          type: NotificationType.MENTION_IN_POST,
          url: `/groups/${createPostDto.postGroupId}?postId=${data.id}`,
        });
      });
      await this.notificationsService.createMany(notifications);
    }
  }
}

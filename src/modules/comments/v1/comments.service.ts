import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SuperbaseService } from 'modules/supabse/supabse.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { NotificationsService } from 'modules/notifications/v1/notifications.service';
import { isEmpty } from 'lodash';
import { NotificationType } from 'common/enums/notification-type.enums';
import { PostsService } from 'modules/posts/v1/posts.service';

@Injectable()
export class CommentService {
  constructor(
    public readonly superbaseService: SuperbaseService,
    public readonly notificationsService: NotificationsService,
    public readonly postsService: PostsService,
  ) {}

  async create(userId: string, createCommentDto: CreateCommentDto) {
    const { data, error } = await this.superbaseService
      .getClient()
      .from('post_comments')
      .insert({ userId, ...createCommentDto })
      .select()
      .single();
    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    const content = JSON.parse(createCommentDto.content);
    const mentions = content.root.children[0].children.filter((item: any) => item.type === 'mention');
    const mentionIds = mentions.map((mention: any) => mention.mention.id);

    const post = await this.postsService.getById(createCommentDto.postId);

    const notifications = [];

    if (!isEmpty(mentionIds)) {
      mentionIds.forEach((mentionId: string) => {
        notifications.push({
          userId: mentionId,
          notifierId: userId,
          type: NotificationType.MENTION_IN_COMMENT,
          url: `/groups/${post.groupId}?postId=${createCommentDto.postId}`,
        });
      });
    }

    if (userId !== post.userId) {
      notifications.push({
        userId: post.userId,
        notifierId: userId,
        type: NotificationType.COMMENT_OWN_POST,
        url: `/groups/${post.groupId}?postId=${createCommentDto.postId}`,
      });
    }

    await this.notificationsService.createMany(notifications);

    return data;
  }
}

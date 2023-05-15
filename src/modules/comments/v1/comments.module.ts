import { Module } from '@nestjs/common';
import { CommentService } from './comments.service';
import { CommentController } from './comments.controller';
import { SupabseModule } from 'modules/supabse/supabase.module';
import { SymptomsModule } from 'modules/symptoms/v1/symptoms.module';
import { NotificationsModule } from 'modules/notifications/v1/notifications.module';
import { PostsModule } from 'modules/posts/v1/posts.module';

@Module({
  imports: [SupabseModule, PostsModule, SymptomsModule, NotificationsModule],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentsModule {}

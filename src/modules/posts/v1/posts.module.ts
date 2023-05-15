import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { SupabseModule } from 'modules/supabse/supabase.module';
import { NotificationsModule } from 'modules/notifications/v1/notifications.module';
import { PostsController } from './posts.controller';

@Module({
  imports: [SupabseModule, NotificationsModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}

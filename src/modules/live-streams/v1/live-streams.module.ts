import { Module } from '@nestjs/common';
import { LiveStreamsService } from './live-streams.service';
import { LiveStreamsController } from './live-streams.controller';
import { SupabseModule } from 'modules/supabse/supabase.module';
import { SymptomsModule } from 'modules/symptoms/v1/symptoms.module';
import { NotificationsModule } from 'modules/notifications/v1/notifications.module';
import { PostsModule } from 'modules/posts/v1/posts.module';
import { UsersModule } from 'modules/users/v1/users.module';

@Module({
  imports: [SupabseModule, PostsModule, SymptomsModule, NotificationsModule, UsersModule],
  controllers: [LiveStreamsController],
  providers: [LiveStreamsService],
})
export class LiveStreamsModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { CommentsModule } from 'modules/comments/v1/comments.module';
import { LiveStreamsModule } from 'modules/live-streams/v1/live-streams.module';
import { SupabseGuard } from 'modules/supabse/supabase.guard';
import { SupabseModule } from 'modules/supabse/supabase.module';
import { UsersModule } from 'modules/users/v1/users.module';

@Module({
  imports: [ConfigModule.forRoot(), SupabseModule, UsersModule, CommentsModule, LiveStreamsModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: SupabseGuard,
    },
  ],
})
export class AppModule {}

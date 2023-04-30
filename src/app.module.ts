import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { SupabseGuard } from 'modules/supabse/supabase.guard';
import { SupabseModule } from 'modules/supabse/supabase.module';

@Module({
  imports: [ConfigModule.forRoot(), SupabseModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: SupabseGuard,
    },
  ],
})
export class AppModule {}

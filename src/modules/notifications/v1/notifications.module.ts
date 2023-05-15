import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { SupabseModule } from 'modules/supabse/supabase.module';
import { SymptomsModule } from 'modules/symptoms/v1/symptoms.module';

@Module({
  imports: [SupabseModule, SymptomsModule],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}

import { Module } from '@nestjs/common';
import { SymptomsService } from './symptoms.service';
import { SupabseModule } from 'modules/supabse/supabase.module';

@Module({
  imports: [SupabseModule],
  providers: [SymptomsService],
  exports: [SymptomsService],
})
export class SymptomsModule {}

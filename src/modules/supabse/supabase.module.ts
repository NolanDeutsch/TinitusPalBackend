import { Module } from '@nestjs/common';
import { SuperbaseService } from './supabse.service';
import { PassportModule } from '@nestjs/passport';
import { SupabaseStrategy } from './supabase.strategy';

@Module({
  imports: [PassportModule],
  providers: [SuperbaseService, SupabaseStrategy],
  exports: [SuperbaseService],
})
export class SupabseModule {}

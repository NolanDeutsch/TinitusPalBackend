import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SupabseModule } from 'modules/supabse/supabase.module';
import { SymptomsModule } from 'modules/symptoms/v1/symptoms.module';

@Module({
  imports: [SupabseModule, SymptomsModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

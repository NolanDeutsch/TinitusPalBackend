import { Module } from '@nestjs/common';
import { SuperbaseService } from './supabse.service';

@Module({
  providers: [SuperbaseService],
  exports: [SuperbaseService],
})
export class SupabseModule {}

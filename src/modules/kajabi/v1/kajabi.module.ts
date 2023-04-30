import { Module } from '@nestjs/common';
import { KajabiService } from './kajabi.service';

@Module({
  
  providers: [KajabiService],
  exports: [KajabiService],
})
export class SymptomsModule {}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LiveStreamsService } from './live-streams.service';
import { CreateLiveStreamDto } from './dto/create-live-stream.dto';

@Controller({
  path: 'live-streams',
  version: '1',
})
export class LiveStreamsController {
  constructor(private readonly liveStreamsService: LiveStreamsService) {}

  @Post()
  async create(@Body() createLiveStreamDto: CreateLiveStreamDto) {
    return this.liveStreamsService.create(createLiveStreamDto);
  }
}

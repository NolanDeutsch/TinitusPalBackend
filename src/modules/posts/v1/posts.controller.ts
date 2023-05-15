import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from 'common/decorators/user.decorator';
import { AuthUser } from 'common/types/superbase.types';
import { PostsService } from './posts.service';

@Controller({
  path: 'posts',
  version: '1',
})
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@User() user: AuthUser, @Body() createPostDto: CreatePostDto) {
    return this.postsService.create(user.sub, createPostDto);
  }
}

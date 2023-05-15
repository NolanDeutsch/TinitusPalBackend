import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { User } from 'common/decorators/user.decorator';
import { AuthUser } from 'common/types/superbase.types';

@Controller({
  path: 'comments',
  version: '1',
})
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(@User() user: AuthUser, @Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(user.sub, createCommentDto);
  }
}

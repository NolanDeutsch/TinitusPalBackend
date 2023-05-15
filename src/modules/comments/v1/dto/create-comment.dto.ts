import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  readonly postId: number;

  @IsNumber()
  @IsOptional()
  readonly parentCommentId: number;

  @IsString()
  readonly content: string;

  @IsString()
  @IsOptional()
  readonly media: string;
}

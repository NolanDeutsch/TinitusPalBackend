import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly content: string;

  @IsString({ each: true })
  @IsOptional()
  readonly media: string[];

  @IsNumber()
  readonly postGroupId: number;
}

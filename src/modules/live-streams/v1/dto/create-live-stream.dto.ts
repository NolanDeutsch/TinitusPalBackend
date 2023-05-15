import { IsDateString, IsString } from 'class-validator';

export class CreateLiveStreamDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly link: string;

  @IsDateString()
  readonly dateTime: string;
}

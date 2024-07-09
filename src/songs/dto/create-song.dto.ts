import { IsString, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly length: string;

  @IsNotEmpty()
  readonly album: Types.ObjectId;
}

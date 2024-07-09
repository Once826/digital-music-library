import { IsString, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateSongDto {
  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsString()
  @IsOptional()
  readonly length?: number;

  @IsOptional()
  readonly album?: Types.ObjectId;
}

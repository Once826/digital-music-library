import { IsString, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateAlbumDto {
  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsOptional()
  readonly artist?: Types.ObjectId;
}

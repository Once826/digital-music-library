import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class FindAlbumDto {
  @IsString()
  @IsNotEmpty()
  readonly title?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;
}

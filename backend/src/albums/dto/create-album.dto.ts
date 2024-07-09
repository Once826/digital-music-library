import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';
import { SongDto } from 'src/songs/dto/song.dto';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @Type(() => SongDto)
  songs: SongDto[];

  @IsString()
  @IsNotEmpty()
  artist: string;
}

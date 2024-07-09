import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';
import { CreateAlbumDto } from 'src/albums/dto/create-album.dto';

export class CreateArtistDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsArray()
  @Type(() => CreateAlbumDto)
  albums?: CreateAlbumDto[];
}

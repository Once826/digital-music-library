import { IsString, IsNotEmpty } from 'class-validator';

export class SongDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  length: string;
}

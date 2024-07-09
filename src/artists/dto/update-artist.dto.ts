import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateArtistDto {
  @IsString()
  @IsNotEmpty()
  readonly name?: string;
}

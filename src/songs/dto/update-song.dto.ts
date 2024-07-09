import { PartialType } from '@nestjs/mapped-types';
import { SongDto } from './song.dto';

export class UpdateSongDto extends PartialType(SongDto) {}

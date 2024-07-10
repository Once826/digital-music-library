import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongDto } from './dto/song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './schemas/song.schema';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: SongDto): Promise<Song> {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll(): Promise<Song[]> {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Song> {
    return this.songsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSongDto: UpdateSongDto,
  ): Promise<Song> {
    return this.songsService.update(id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.songsService.remove(id);
  }
}

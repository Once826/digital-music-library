import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './schemas/artist.schema';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto): Promise<Artist> {
    return this.artistsService.create(createArtistDto);
  }

  @Post('bulk-create')
  async bulkCreate(@Body() createArtistDtos: CreateArtistDto[]) {
    return this.artistsService.bulkCreate(createArtistDtos);
  }

  @Get()
  findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Artist> {
    return this.artistsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateArtistDto: UpdateArtistDto,
  ): Promise<Artist> {
    return this.artistsService.update(id, updateArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.artistsService.remove(id);
  }
}

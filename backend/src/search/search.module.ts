import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from 'src/albums/schemas/album.schema';
import { Artist, ArtistSchema } from 'src/artists/schemas/artist.schema';
import { Song, SongSchema } from 'src/songs/schemas/song.schema';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema }]),
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
  ],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { Artist, ArtistSchema } from './schemas/artist.schema';
import { Album, AlbumSchema } from '../albums/schemas/album.schema';
import { Song, SongSchema } from 'src/songs/schemas/song.schema';
import { AlbumsService } from 'src/albums/albums.service';
import { SongsService } from 'src/songs/songs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema }]),
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
  ],
  controllers: [ArtistsController],
  providers: [ArtistsService, AlbumsService, SongsService],
})
export class ArtistsModule {}

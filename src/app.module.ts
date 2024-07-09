import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/digital-music-library'),
    ArtistsModule,
    AlbumsModule,
    SongsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

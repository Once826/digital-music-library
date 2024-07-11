import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album } from 'src/albums/schemas/album.schema';
import { Artist } from 'src/artists/schemas/artist.schema';
import { Song } from 'src/songs/schemas/song.schema';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel('Artist') private artistModel: Model<Artist>,
    @InjectModel('Album') private albumModel: Model<Album>,
    @InjectModel('Song') private songModel: Model<Song>,
  ) {}

  async getSuggestions(query: string) {
    if (!query) {
      return { artists: [], albums: [], songs: [] };
    }

    const sanitizedQuery = query.replace(/[^\w\s]/gi, '').toLowerCase();

    const regex = new RegExp(`^${sanitizedQuery}`, 'i');

    const artists = await this.artistModel
      .find({
        name: { $regex: regex },
      })
      .exec();

    const albums = await this.albumModel
      .find({
        title: { $regex: regex },
      })
      .exec();

    const songs = await this.songModel
      .find({
        title: { $regex: regex },
      })
      .exec();

    return { artists, albums, songs };
  }
}

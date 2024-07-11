import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Song } from 'src/songs/schemas/song.schema';
import { Album } from 'src/albums/schemas/album.schema';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist.name) private artistModel: Model<Artist>,
    @InjectModel(Album.name) private albumModel: Model<Album>,
    @InjectModel(Song.name) private songModel: Model<Song>,
  ) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    return createdArtist.save();
  }

  async bulkCreate(createArtistsDto: CreateArtistDto[]): Promise<any> {
    const results = [];
    for (const createArtistDto of createArtistsDto) {
      const artist = await this.artistModel.create({
        name: createArtistDto.name,
      });

      const albumIds = [];
      for (const createAlbumDto of createArtistDto.albums) {
        const album = await this.albumModel.create({
          ...createAlbumDto,
          artist: artist._id,
        });

        const songIds = [];
        for (const createSongDto of createAlbumDto.songs) {
          const song = await this.songModel.create({
            ...createSongDto,
            album: album._id,
          });
          await song.save();
          songIds.push(song._id);
        }

        album.songs = songIds;
        await album.save();
        albumIds.push(album._id);
      }

      artist.albums = albumIds;
      await artist.save();
      results.push(artist);
    }
    return results;
  }

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().populate('albums').exec();
  }

  async findOne(id: string): Promise<Artist> {
    return this.artistModel.findById(id).populate('albums').exec();
  }

  async update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    return this.artistModel
      .findByIdAndUpdate(id, updateArtistDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.artistModel.findByIdAndDelete(id).exec();
  }
}

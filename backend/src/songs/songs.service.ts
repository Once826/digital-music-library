import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SongDto } from './dto/song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './schemas/song.schema';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<Song>) {}

  async create(createSongDto: SongDto): Promise<SongDto> {
    const createdSong = new this.songModel(createSongDto);
    return this.toSongDto(await createdSong.save());
  }

  async findAll(): Promise<SongDto[]> {
    return (await this.songModel.find().exec()).map((song) =>
      this.toSongDto(song),
    );
  }

  async findOne(id: string): Promise<SongDto> {
    return this.toSongDto(await this.songModel.findById(id).exec());
  }

  async update(id: string, updateSongDto: UpdateSongDto): Promise<SongDto> {
    return this.toSongDto(
      await this.songModel
        .findByIdAndUpdate(id, updateSongDto, { new: true })
        .exec(),
    );
  }

  async remove(id: string): Promise<any> {
    return this.songModel.findByIdAndDelete(id).exec();
  }

  private toSongDto(song: Song): SongDto {
    return {
      title: song.title,
      length: song.length,
    };
  }
}

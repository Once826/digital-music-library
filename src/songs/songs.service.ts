import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './schemas/song.schema';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<Song>) {}

  async create(createSongDto: CreateSongDto): Promise<Song> {
    const createdSong = new this.songModel(createSongDto);
    return createdSong.save();
  }

  async findAll(): Promise<Song[]> {
    return this.songModel.find().populate('album').exec();
  }

  async findOne(id: string): Promise<Song> {
    return this.songModel.findById(id).populate('album').exec();
  }

  async update(id: string, updateSongDto: UpdateSongDto): Promise<Song> {
    return this.songModel
      .findByIdAndUpdate(id, updateSongDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.songModel.findByIdAndDelete(id).exec();
  }
}

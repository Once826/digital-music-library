import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './schemas/album.schema';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album.name) private albumModel: Model<Album>) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const createdAlbum = new this.albumModel(createAlbumDto);
    return createdAlbum.save();
  }

  async findAll(): Promise<Album[]> {
    return this.albumModel.find().populate('songs').exec();
  }

  async findOne(id: string): Promise<Album> {
    return this.albumModel.findById(id).populate('songs').exec();
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    return this.albumModel
      .findByIdAndUpdate(id, updateAlbumDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.albumModel.findByIdAndDelete(id).exec();
  }
}

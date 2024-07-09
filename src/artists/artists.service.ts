import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel(Artist.name) private artistModel: Model<Artist>) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    return createdArtist.save();
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

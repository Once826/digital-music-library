import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Album } from 'src/albums/schemas/album.schema';

export type SongDocument = HydratedDocument<Song>;

@Schema()
export class Song {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  length: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Album' })
  album: Album;
}

export const SongSchema = SchemaFactory.createForClass(Song);

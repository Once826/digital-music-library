import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument, Types } from 'mongoose';
import { Artist } from 'src/artists/schemas/artist.schema';
import { Song } from 'src/songs/schemas/song.schema';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Song' }] })
  songs: Song[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true })
  artist: Artist;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);

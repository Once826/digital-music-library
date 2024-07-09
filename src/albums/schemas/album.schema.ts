import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Artist } from 'src/artists/schemas/artist.schema';
import { Song } from 'src/songs/schemas/song.schema';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' })
  artist: Artist;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }])
  songs: Song[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);

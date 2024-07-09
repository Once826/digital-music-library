import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Song' }] })
  songs: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'Artist', required: true })
  artist: Types.ObjectId;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);

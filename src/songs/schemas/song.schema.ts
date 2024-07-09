import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type SongDocument = HydratedDocument<Song>;

@Schema()
export class Song {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  length: string;

  @Prop({ type: Types.ObjectId, ref: 'Album', required: true })
  album: Types.ObjectId;
}

export const SongSchema = SchemaFactory.createForClass(Song);

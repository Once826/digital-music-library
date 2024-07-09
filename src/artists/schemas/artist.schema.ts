import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Album } from 'src/albums/schemas/album.schema';

export type ArtistDocument = HydratedDocument<Artist>;

@Schema()
export class Artist extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }] })
  albums: Album[];
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);

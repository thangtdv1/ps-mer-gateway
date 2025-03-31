import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema({ strict: false })
export class Artwork {
  
}

export const ArtworkSchema = SchemaFactory.createForClass(Artwork);
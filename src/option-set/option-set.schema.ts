import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema({ strict: false })
export class OptionSet {
  
}

export const OptionSetSchema = SchemaFactory.createForClass(OptionSet);
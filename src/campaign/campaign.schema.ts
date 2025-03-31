import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema({ strict: false })
export class Campaign {
  
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CampaignService } from './campaign.service';
import CLIENT from '../constants/client';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignSchema ,Campaign} from './campaign.schema';

@Module({
  controllers: [CampaignController],
  providers: [CampaignService],
  imports: [
        MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
    
    ClientsModule.register([
      {
        name: CLIENT.campaign.name,
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_SERVER],
        },
      },
    ]),
  ],
})
export class CampaignModule {}

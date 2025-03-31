import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import CLIENT from '../constants/client';
import { InjectModel } from '@nestjs/mongoose';
import { Campaign } from './campaign.schema';

@Injectable()
export class CampaignService {
  constructor(
    @Inject(CLIENT.campaign.name)
    private readonly campaignClient: ClientProxy,
        @InjectModel(Campaign.name) private campaignModel
  ) {}


  async create(campaignInput) {

    const createdCampaign = new this.campaignModel(campaignInput);
    return createdCampaign.save();
    
  }
  
  // async get(id) {
  //   const result = await firstValueFrom(
  //     this.campaignClient.send(CLIENT.campaign.get, { id }),
  //   );

  //   return result;
  // }

  // async create(campaignInput) {
  //   const result = await firstValueFrom(
  //     this.campaignClient.send(CLIENT.campaign.create, campaignInput),
  //   );
  //   return result;
  // }
}

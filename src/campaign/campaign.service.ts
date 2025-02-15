import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import CLIENT from '../constants/client';

@Injectable()
export class CampaignService {
  constructor(
    @Inject(CLIENT.campaign.name)
    private readonly campaignClient: ClientProxy,
  ) {}

  async get(id) {
    const result = await firstValueFrom(
      this.campaignClient.send(CLIENT.campaign.get, { id }),
    );

    return result;
  }

  async create(campaignInput) {
    const result = await firstValueFrom(
      this.campaignClient.send(CLIENT.campaign.create, campaignInput),
    );
    return result;
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller('Campaigns')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Get(':id')
  async get(@Param('id') id) {
    return await this.campaignService.get(id);
  }

  @Post()
  async create(@Body() campaignDto) {
    return this.campaignService.create(campaignDto);
  }
}

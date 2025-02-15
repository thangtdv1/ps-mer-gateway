import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtworkModule } from './artwork/artwork.module';
import { OptionSetModule } from './option-set/option-set.module';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [ArtworkModule, OptionSetModule, CampaignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

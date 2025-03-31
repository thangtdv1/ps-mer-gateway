import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtworkModule } from './artwork/artwork.module';
import { OptionSetModule } from './option-set/option-set.module';
import { CampaignModule } from './campaign/campaign.module';
import { ArtworkExampleModule } from './artwork-example/artwork-example.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
   MongooseModule.forRoot('mongodb://root:example@localhost:27020/petzy3000?authSource=admin'),
    ArtworkModule,
    OptionSetModule,
    CampaignModule,
    ArtworkExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

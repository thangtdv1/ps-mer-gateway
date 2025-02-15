import { Module } from '@nestjs/common';
import { ArtworkController } from './artwork.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ArtworkService } from './artwork.service';
import CLIENT from '../constants/client';

@Module({
  controllers: [ArtworkController],
  providers: [ArtworkService],
  imports: [
    ClientsModule.register([
      {
        name: CLIENT.artwork.name,
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_SERVER],
        },
      },
    ]),
  ],
})
export class ArtworkModule {}

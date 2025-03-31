import { Module } from '@nestjs/common';
import { ArtworkExampleController } from './artwork-example.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ArtworkExampleService } from './artwork-example.service';
import CLIENT from '../constants/client';

@Module({
  controllers: [ArtworkExampleController],
  providers: [ArtworkExampleService],
  imports: [
    ClientsModule.register([
      {
        name: CLIENT.artworkExample.name,
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_SERVER],
        },
      },
    ]),
  ],
})
export class ArtworkExampleModule {}

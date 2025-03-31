import { Module } from '@nestjs/common';
import { OptionSetController } from './option-set.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OptionSetService } from './option-set.service';
import CLIENT from '../constants/client';
import { MongooseModule } from '@nestjs/mongoose';
import { OptionSetSchema,OptionSet } from './option-set.schema';

@Module({
  controllers: [OptionSetController],
  providers: [OptionSetService],
  imports: [
        MongooseModule.forFeature([{ name: OptionSet.name, schema: OptionSetSchema }]),
    
    ClientsModule.register([
      {
        name: CLIENT.optionSet.name,
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_SERVER],
        },
      },
    ]),
  ],
})
export class OptionSetModule {}

import {
  Injectable,
  Inject,
  NotFoundException,
  HttpException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import CLIENT from '../constants/client';
import { InjectModel } from '@nestjs/mongoose';
import { OptionSet } from './option-set.schema';

@Injectable()
export class OptionSetService {
  constructor(
    @Inject(CLIENT.optionSet.name)
    private readonly optionSetClient: ClientProxy,
        @InjectModel(OptionSet.name) private optionSetModel
    
  ) {}


  async get(id) {

   
    return this.optionSetModel.findById(id)

  }
  
  async getList() {

   
    return this.optionSetModel.find()

  }

  async create(optionSetInput) {
    const createdOptionSet = new this.optionSetModel(optionSetInput);
    return createdOptionSet.save();
  }
  
  
  // async get(id) {
  //   const result = await firstValueFrom(
  //     this.optionSetClient.send(CLIENT.optionSet.get, { id }),
  //   );

  //   return result;
  // }

  // async create(optionSetInput) {
  //   const result = await firstValueFrom(
  //     this.optionSetClient.send(CLIENT.optionSet.create, optionSetInput),
  //   );
  //   return result;
  // }
}

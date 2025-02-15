import {
  Injectable,
  Inject,
  NotFoundException,
  HttpException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import CLIENT from '../constants/client';

@Injectable()
export class OptionSetService {
  constructor(
    @Inject(CLIENT.optionSet.name)
    private readonly optionSetClient: ClientProxy,
  ) {}

  async get(id) {
    const result = await firstValueFrom(
      this.optionSetClient.send(CLIENT.optionSet.get, { id }),
    );

    return result;
  }

  async create(optionSetInput) {
    const result = await firstValueFrom(
      this.optionSetClient.send(CLIENT.optionSet.create, optionSetInput),
    );
    return result;
  }
}

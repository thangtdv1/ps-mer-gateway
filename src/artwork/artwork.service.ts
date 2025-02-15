import {
  Injectable,
  Inject,
  NotFoundException,
  HttpException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import CLIENT from '../constants/client';
import { CreateArtworkInput } from './interfaces/artwork.interface';

@Injectable()
export class ArtworkService {
  constructor(
    @Inject(CLIENT.artwork.name) private readonly artworkClient: ClientProxy,
  ) {}

  async get(id) {
    const result = await firstValueFrom(
      this.artworkClient.send(CLIENT.artwork.get, { id }),
    );

    return result;
  }

  async create(artworkInput: CreateArtworkInput) {
    const result = await firstValueFrom(
      this.artworkClient.send(CLIENT.artwork.create, artworkInput),
    );
    return result;
  }
}

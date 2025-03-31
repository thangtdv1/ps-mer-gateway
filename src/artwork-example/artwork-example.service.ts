import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import CLIENT from '../constants/client';
import { CreateArtworkExampleInput } from './interfaces/artwork-example.interface';

@Injectable()
export class ArtworkExampleService {
  constructor(
    @Inject(CLIENT.artworkExample.name)
    private readonly artworkExampleClient: ClientProxy,
  ) {}

  async get(id) {
    const result = await firstValueFrom(
      this.artworkExampleClient.send(CLIENT.artworkExample.get, { id }),
    );

    return result;
  }

  async create(artworkExampleInput: CreateArtworkExampleInput) {
    const result = await firstValueFrom(
      this.artworkExampleClient.send(
        CLIENT.artworkExample.create,
        artworkExampleInput,
      ),
    );
    return result;
  }
}

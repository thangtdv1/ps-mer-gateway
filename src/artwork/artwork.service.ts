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
import artworks from '../data-global/artwork';
import { Artwork } from './artwork.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArtworkService {
  constructor(
    @Inject(CLIENT.artwork.name) private readonly artworkClient: ClientProxy,
    @InjectModel(Artwork.name) private artworkModel) 

   
  {}




   async get(id) {

   
    return this.artworkModel.findById(id)

  }
   async getList() {

   
    return this.artworkModel.find()

  }
  

  async create(artworkInput) {

    const createdArtwork = new this.artworkModel(artworkInput);
    return createdArtwork.save();
    
  }
 async update(id,artworkInput) {

  return this.artworkModel.findByIdAndUpdate(
    id,        
    { $set: artworkInput },
    { new: true },      
  );
  
  
  }

  // async get(id) {
  //   const result = await firstValueFrom(
  //     this.artworkClient.send(CLIENT.artwork.get, { id }),
  //   );

  //   return result;
  // }

  // async create(artworkInput: CreateArtworkInput) {
  //   const result = await firstValueFrom(
  //     this.artworkClient.send(CLIENT.artwork.create, artworkInput),
  //   );
  //   return result;
  // }
}

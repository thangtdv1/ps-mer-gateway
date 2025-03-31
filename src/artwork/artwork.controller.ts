import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ArtworkService } from './artwork.service';
import { CreateArtworkDto } from './dto/artwork.dto';

@Controller('Artworks')
export class ArtworkController {
  constructor(private artworkService: ArtworkService) {}

  @Get(':id')
  async get(@Param('id') id) {
    return await this.artworkService.get(id);
  }

  @Put(':id')
  async update(@Param('id') id,@Body() artworkDto) {
    return await this.artworkService.update(id,artworkDto);
  }
  
  @Post()
  async create(@Body() artworkDto: CreateArtworkDto) {
    return this.artworkService.create(artworkDto);
  }
}

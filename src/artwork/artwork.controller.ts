import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArtworkService } from './artwork.service';
import { CreateArtworkDto } from './dto/artwork.dto';

@Controller('Artworks')
export class ArtworkController {
  constructor(private artworkService: ArtworkService) {}

  @Get(':id')
  async get(@Param('id') id) {
    return await this.artworkService.get(id);
  }

  @Post()
  async create(@Body() artworkDto: CreateArtworkDto) {
    return this.artworkService.create(artworkDto);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArtworkExampleService } from './artwork-example.service';
import { CreateArtworkExampleDto } from './dto/artwork-example.dto';

@Controller('Artwork-Examples')
export class ArtworkExampleController {
  constructor(private artworkExampleService: ArtworkExampleService) {}

  @Get(':id')
  async get(@Param('id') id) {
    return await this.artworkExampleService.get(id);
  }

  @Post()
  async create(@Body() artworkExampleDto: CreateArtworkExampleDto) {
    return this.artworkExampleService.create(artworkExampleDto);
  }
}

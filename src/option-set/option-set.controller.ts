import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OptionSetService } from './option-set.service';

@Controller('Option-sets')
export class OptionSetController {
  constructor(private optionSetService: OptionSetService) {}

  @Get(':id')
  async get(@Param('id') id) {
    return await this.optionSetService.get(id);
  }


  @Get()
  async getList() {
    return await this.optionSetService.getList();
  }

  
  @Post()
  async create(@Body() optionSetDto) {
    return this.optionSetService.create(optionSetDto);
  }
}

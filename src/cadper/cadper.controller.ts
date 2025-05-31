import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CadperService } from './cadper.service';
import { CreateCadperDto } from './dto/create-cadper.dto';
import { UpdateCadperDto } from './dto/update-cadper.dto';

@Controller('cadper')
export class CadperController {
  constructor(private readonly cadperService: CadperService) {}

  @Post()
  create(@Body() createCadperDto: CreateCadperDto) {
    return this.cadperService.create(createCadperDto);
  }

  @Get()
  findAll() {
    return this.cadperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadperService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadperDto: UpdateCadperDto) {
    return this.cadperService.update(+id, updateCadperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadperService.remove(+id);
  }
}

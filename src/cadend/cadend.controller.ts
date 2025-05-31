import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CadendService } from './cadend.service';
import { CreateCadendDto } from './dto/create-cadend.dto';
import { UpdateCadendDto } from './dto/update-cadend.dto';

@Controller('cadend')
export class CadendController {
  constructor(private readonly cadendService: CadendService) {}

  @Post()
  create(@Body() createCadendDto: CreateCadendDto) {
    return this.cadendService.create(createCadendDto);
  }

  @Get()
  findAll() {
    return this.cadendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadendDto: UpdateCadendDto) {
    return this.cadendService.update(+id, updateCadendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadendService.remove(+id);
  }
}

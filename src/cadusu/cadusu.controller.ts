import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CadusuService } from './cadusu.service';
import { CreateCadusuDto } from './dto/create-cadusu.dto';
import { UpdateCadusuDto } from './dto/update-cadusu.dto';

@Controller('cadusu')
export class CadusuController {
  constructor(private readonly cadusuService: CadusuService) {}

  @Post()
  create(@Body() createCadusuDto: CreateCadusuDto) {
    return this.cadusuService.create(createCadusuDto);
  }

  @Get()
  findAll() {
    return this.cadusuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadusuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadusuDto: UpdateCadusuDto) {
    return this.cadusuService.update(+id, updateCadusuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadusuService.remove(+id);
  }
}

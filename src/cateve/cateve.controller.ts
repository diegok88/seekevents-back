import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CateveService } from './cateve.service';
import { CreateCateveDto } from './dto/create-cateve.dto';
import { UpdateCateveDto } from './dto/update-cateve.dto';

@Controller('cateve')
export class CateveController {
  constructor(private readonly cateveService: CateveService) {}

  @Post()
  create(@Body() createCateveDto: CreateCateveDto) {
    return this.cateveService.create(createCateveDto);
  }

  @Get()
  findAll() {
    return this.cateveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cateveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCateveDto: UpdateCateveDto) {
    return this.cateveService.update(+id, updateCateveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cateveService.remove(+id);
  }
}

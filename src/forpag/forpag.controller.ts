import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForpagService } from './forpag.service';
import { CreateForpagDto } from './dto/create-forpag.dto';
import { UpdateForpagDto } from './dto/update-forpag.dto';

@Controller('forpag')
export class ForpagController {
  constructor(private readonly forpagService: ForpagService) {}

  @Post()
  create(@Body() createForpagDto: CreateForpagDto) {
    return this.forpagService.create(createForpagDto);
  }

  @Get()
  findAll() {
    return this.forpagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forpagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateForpagDto: UpdateForpagDto) {
    return this.forpagService.update(+id, updateForpagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forpagService.remove(+id);
  }
}

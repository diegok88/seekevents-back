import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatempService } from './catemp.service';
import { CreateCatempDto } from './dto/create-catemp.dto';
import { UpdateCatempDto } from './dto/update-catemp.dto';

@Controller('catemp')
export class CatempController {
  constructor(private readonly catempService: CatempService) {}

  @Post()
  create(@Body() createCatempDto: CreateCatempDto) {
    return this.catempService.create(createCatempDto);
  }

  @Get()
  findAll() {
    return this.catempService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catempService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatempDto: UpdateCatempDto) {
    return this.catempService.update(+id, updateCatempDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catempService.remove(+id);
  }
}

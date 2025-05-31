import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CadempService } from './cademp.service';
import { CreateCadempDto } from './dto/create-cademp.dto';
import { UpdateCadempDto } from './dto/update-cademp.dto';

@Controller('cademp')
export class CadempController {
  constructor(private readonly cadempService: CadempService) {}

  @Post()
  create(@Body() createCadempDto: CreateCadempDto) {
    return this.cadempService.create(createCadempDto);
  }

  @Get()
  findAll() {
    return this.cadempService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadempService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadempDto: UpdateCadempDto) {
    return this.cadempService.update(+id, updateCadempDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadempService.remove(+id);
  }
}

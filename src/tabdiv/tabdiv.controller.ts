import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabdivService } from './tabdiv.service';
import { CreateTabdivDto } from './dto/create-tabdiv.dto';
import { UpdateTabdivDto } from './dto/update-tabdiv.dto';

@Controller('tabdiv')
export class TabdivController {
  constructor(private readonly tabdivService: TabdivService) {}

  @Post()
  create(@Body() createTabdivDto: CreateTabdivDto) {
    return this.tabdivService.create(createTabdivDto);
  }

  @Get()
  findAll() {
    return this.tabdivService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabdivService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabdivDto: UpdateTabdivDto) {
    return this.tabdivService.update(+id, updateTabdivDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabdivService.remove(+id);
  }
}

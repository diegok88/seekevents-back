import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CadeveService } from './cadeve.service';
import { diskStorage } from 'multer';
import { CreateCadeveDto } from './dto/create-cadeve.dto';
import { UpdateCadeveDto } from './dto/update-cadeve.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

@Controller('cadeve')
export class CadeveController {
  constructor(private readonly cadeveService: CadeveService) { }

  //baixar dependencias
  //npm install --save-dev @types/multer 
  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array.from({ length: 32 }, () => 
          Math.floor(Math.random() * 16).toString(16)
        ).join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
  }))
  create(
    @Body() createCadeveDto: CreateCadeveDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (file) {
      createCadeveDto.cevima = file.filename;
    }
    return this.cadeveService.create(createCadeveDto);
  }

  @Get()
  findAll() {
    return this.cadeveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadeveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadeveDto: UpdateCadeveDto) {
    return this.cadeveService.update(+id, updateCadeveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadeveService.remove(+id);
  }
}
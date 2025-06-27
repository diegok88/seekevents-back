import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCateveDto } from './dto/create-cateve.dto';
import { UpdateCateveDto } from './dto/update-cateve.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Cateve } from './entities/cateve.entity';

@Injectable()
export class CateveService {
  constructor(private prisma: PrismaService) {}
 
   private mapToEntity(categoria: any): Cateve{
     return {
       caeide: categoria.caeide,
       caedes: categoria.caedes,
       caesta: categoria.caesta,
     }
   }
 
   async create(createCateveDto: CreateCateveDto): Promise<Cateve> {
     const dado = await this.prisma.cATEVE.create({
       data: createCateveDto,
     })
     return this.mapToEntity(dado);
   }
 
   async findAll(): Promise<Cateve[]> {
     const dado = await this.prisma.cATEVE.findMany()
     return  dado.map((dado) => this.mapToEntity(dado));
   }
 
   async findOne(caeide: number): Promise<Cateve> {
     const dado = await this.prisma.cATEVE.findUnique({
       where: { caeide }
     })
     if(!dado){
       throw new NotFoundException(`Categoria de Empresa com ID ${caeide} não foi encntrado`)
     }
     return this.mapToEntity(dado);
   }
 
   async update(caeide: number, UpdateCateveDto: UpdateCateveDto): Promise<Cateve> {
     const dado = await this.prisma.cATEVE.update({
       where: { caeide: caeide},
       data: UpdateCateveDto,
     })
     return this.mapToEntity(dado);
   }
 
   async remove(caeide: number): Promise<Cateve> {
     const dado = await this.prisma.cATEVE.delete({
       where: { caeide: caeide }
     })
     return this.mapToEntity(dado);
   }
}

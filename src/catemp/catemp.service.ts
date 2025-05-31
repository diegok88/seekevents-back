import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatempDto } from './dto/create-catemp.dto';
import { UpdateCatempDto } from './dto/update-catemp.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Catemp } from './entities/catemp.entity';


@Injectable()
export class CatempService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(categoria: any): Catemp{
    return {
      cteide: categoria.cteide,
      ctedes: categoria.ctedes,
      ctesta: categoria.ctesta,
    }
  }

  async create(createCatempDto: CreateCatempDto): Promise<Catemp> {
    const dado = await this.prisma.cATEMP.create({
      data: createCatempDto,
    })
    return this.mapToEntity(dado);
  }

  async findAll(): Promise<Catemp[]> {
    const dado = await this.prisma.cATEMP.findMany()
    return  dado.map((dado) => this.mapToEntity(dado));
  }

  async findOne(cteide: number): Promise<Catemp> {
    const dado = await this.prisma.cATEMP.findUnique({
      where: { cteide }
    })
    if(!dado){
      throw new NotFoundException(`Categoria de Empresa com ID ${cteide} não foi encntrado`)
    }
    return this.mapToEntity(dado);
  }

  async update(cteide: number, UpdateCatempDto: UpdateCatempDto): Promise<Catemp> {
    const dado = await this.prisma.cATEMP.update({
      where: { cteide: cteide},
      data: UpdateCatempDto,
    })
    return this.mapToEntity(dado);
  }

  async remove(cteide: number): Promise<Catemp> {
    const dado = await this.prisma.cATEMP.delete({
      where: { cteide: cteide }
    })
    return this.mapToEntity(dado);
  }
}

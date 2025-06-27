import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabdivDto } from './dto/create-tabdiv.dto';
import { UpdateTabdivDto } from './dto/update-tabdiv.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Tabdiv } from './entities/tabdiv.entity';

@Injectable()
export class TabdivService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(tabela: any): Tabdiv {
    return {
      tadide: tabela.tadide,
      taddes: tabela.taddes,
      tabdur: tabela.tabdur,
      tadval: tabela.tadval,
      tabsta: tabela.tabsta,
    }
  }

  async create(createTabdivDto: CreateTabdivDto): Promise<Tabdiv> {
    const dado = await this.prisma.tABDIV.create({
      data: createTabdivDto,
    })
    return this.mapToEntity(dado);
  }

  async findAll(): Promise<Tabdiv[]> {
    const dado = await this.prisma.tABDIV.findMany()
    return dado.map((dado) => this.mapToEntity(dado));
  }

  async findOne(tadide: number): Promise<Tabdiv> {
    const dado = await this.prisma.tABDIV.findUnique({
      where: { tadide }
    })
    if (!dado) {
      throw new NotFoundException(`Categoria de Empresa com ID ${tadide} não foi encntrado`)
    }
    return this.mapToEntity(dado);
  }

  async update(tadide: number, UpdateTabdivDto: UpdateTabdivDto): Promise<Tabdiv> {
    const dado = await this.prisma.tABDIV.update({
      where: { tadide: tadide },
      data: UpdateTabdivDto,
    })
    return this.mapToEntity(dado);
  }

  async remove(tadide: number): Promise<Tabdiv> {
    const dado = await this.prisma.tABDIV.delete({
      where: { tadide: tadide }
    })
    return this.mapToEntity(dado);
  }
}

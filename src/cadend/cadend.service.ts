import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCadendDto } from './dto/create-cadend.dto';
import { UpdateCadendDto } from './dto/update-cadend.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Cadend } from './entities/cadend.entity';

@Injectable()
export class CadendService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(dado: any): Cadend{
    return {
      cenide: dado.cenide,
      cenrua: dado.cenrua,
      cennum: dado.cennum,
      cenbai: dado.cenbai,
      cencid: dado.cencid,
      censta: dado.censta,
    }
  }

   async create(createCadendDto: CreateCadendDto): Promise<Cadend> {
    const dado = await this.prisma.cADEND.create({
      data: createCadendDto,
    })
    return this.mapToEntity(dado);
  }

   async findAll(): Promise<Cadend[]> {
    const dado = await this.prisma.cADEND.findMany()
    return  dado.map((dado) => this.mapToEntity(dado));
  }

  async findOne(cenide: number): Promise<Cadend> {
    const dado = await this.prisma.cADEND.findUnique({
      where: { cenide }
    })
    if(!dado){
      throw new NotFoundException(`Categoria de Empresa com ID ${cenide} não foi encntrado`)
    }
    return this.mapToEntity(dado);
  }

  async update(cenide: number, updateCadendDto: UpdateCadendDto): Promise<Cadend> {
    const dado = await this.prisma.cADEND.update({
      where: { cenide: cenide},
      data: updateCadendDto,
    })
    return this.mapToEntity(dado);
  }

  async remove(cenide: number): Promise<Cadend> {
    const dado = await this.prisma.cADEND.delete({
      where: { cenide: cenide }
    })
    return this.mapToEntity(dado);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCadempDto } from './dto/create-cademp.dto';
import { UpdateCadempDto } from './dto/update-cademp.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Cademp } from './entities/cademp.entity';

@Injectable()
export class CadempService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(dado: any): Cademp {
    return {
      cdeide: dado.cdeide,
      cdenom: dado.cdenom,
      cdecnp: dado.cdecnp,
      cdecte: dado.cdecte,
      cdeusu: dado.cdeusu,
      cdecen: dado.cdecen,
      cdesta: dado.cdesta,
    }
  }

  async create(createCadempDto: CreateCadempDto): Promise<Cademp> {
    const dado = await this.prisma.cADEMP.create({
      data: createCadempDto,
    })
    return this.mapToEntity(dado);
  }

  async findAll(): Promise<Cademp[]> {
    const dado = await this.prisma.cADEMP.findMany()
    return  dado.map((dado) => this.mapToEntity(dado));
  }

 async findOne(cdeide: number): Promise<Cademp> {
    const dado = await this.prisma.cADEMP.findUnique({
      where: { cdeide }
    })
    if(!dado){
      throw new NotFoundException(`Categoria de Empresa com ID ${cdeide} não foi encntrado`)
    }
    return this.mapToEntity(dado);
  }

   async update(cdeide: number, updateCadempDto: UpdateCadempDto): Promise<Cademp> {
    const dado = await this.prisma.cADEMP.update({
      where: { cdeide: cdeide},
      data: updateCadempDto,
    })
    return this.mapToEntity(dado);
  }

  async remove(cdeide: number): Promise<Cademp> {
    const dado = await this.prisma.cADEMP.delete({
      where: { cdeide: cdeide }
    })
    return this.mapToEntity(dado);
  }
}

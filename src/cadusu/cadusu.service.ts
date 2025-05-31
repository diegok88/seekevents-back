import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCadusuDto } from './dto/create-cadusu.dto';
import { UpdateCadusuDto } from './dto/update-cadusu.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Cadusu } from './entities/cadusu.entity';

@Injectable()
export class CadusuService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(dado: any): Cadusu {
    return {
      cduide: dado.cduide,
      cdunom: dado.cdunom,
      cducpf: dado.cducpf,
      cduema: dado.cduema,
      cdusen: dado.cdusen,
      cduper: dado.cduper,
      cduemp: dado.cduemp,
      cdufac: dado.cdufac,
      cduins: dado.cduins,
      cdutel: dado.cdutel,
      cdusta: dado.cdusta,
    }
  }

  async create(createCadusuDto: CreateCadusuDto): Promise<Cadusu> {
    const dado = await this.prisma.cADUSU.create({
      data: createCadusuDto,
    })
    return this.mapToEntity(dado);
  }

  async findAll(): Promise<Cadusu[]> {
    const dado = await this.prisma.cADUSU.findMany()
    return  dado.map((dado) => this.mapToEntity(dado));
  }

  async findOne(cduide: number): Promise<Cadusu> {
    const dado = await this.prisma.cADUSU.findUnique({
      where: { cduide }
    })
    if(!dado){
      throw new NotFoundException(`Categoria de Empresa com ID ${cduide} não foi encntrado`)
    }
    return this.mapToEntity(dado);
  }

  async update(cduide: number, updateCadusuDto: UpdateCadusuDto): Promise<Cadusu> {
    const dado = await this.prisma.cADUSU.update({
      where: { cduide: cduide},
      data: updateCadusuDto,
    })
    return this.mapToEntity(dado);
  }

  async remove(cduide: number): Promise<Cadusu> {
    const dado = await this.prisma.cADUSU.delete({
      where: { cduide: cduide }
    })
    return this.mapToEntity(dado);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCadeveDto } from './dto/create-cadeve.dto';
import { UpdateCadeveDto } from './dto/update-cadeve.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Cadeve } from './entities/cadeve.entity';

@Injectable()
export class CadeveService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(dado: any): Cadeve {
    return {
      cevide: dado.cevide,
      cevnom: dado.cevnom,
      cevdes: dado.cevdes,
      cevdat: dado.cevdat,
      cevcae: dado.cevcae,
      cevtad: dado.cavtad,
      cevfpa: dado.cevfpa,
      cevcdu: dado.cevcdu,
      cevima: dado.cevima,
      cevsta: dado.cevsta,
    }
  }

  async create(createCadeveDto: CreateCadeveDto): Promise<Cadeve> {
    const dado = await this.prisma.cADEVE.create({
      data: createCadeveDto,
    })
    return this.mapToEntity(dado);
  }

  async findAll(): Promise<Cadeve[]> {
    const dado = await this.prisma.cADEVE.findMany()
    return dado.map((dado) => this.mapToEntity(dado));
  }

  async findOne(cevide: number): Promise<Cadeve> {
    const dado = await this.prisma.cADEVE.findUnique({
      where: { cevide }
    })
    if (!dado) {
      throw new NotFoundException(`Categoria de Empresa com ID ${cevide} não foi encntrado`)
    }
    return this.mapToEntity(dado);
  }

  async update(cevide: number, updateCadeveDto: UpdateCadeveDto): Promise<Cadeve> {
    const dado = await this.prisma.cADEVE.update({
      where: { cevide: cevide },
      data: updateCadeveDto,
    })
    return this.mapToEntity(dado);
  }

  async remove(cevide: number): Promise<Cadeve> {
    const dado = await this.prisma.cADEVE.delete({
      where: { cevide: cevide }
    })
    return this.mapToEntity(dado);
  }
}

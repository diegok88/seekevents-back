import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCadperDto } from './dto/create-cadper.dto';
import { UpdateCadperDto } from './dto/update-cadper.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Cadper } from './entities/cadper.entity';

@Injectable()
export class CadperService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(dado: any): Cadper{
    return {
      cdpide: dado.cdpide,
      cdpdes: dado.cdpdes,
      cdpsta: dado.cdpsta,
    }
  }

  async create(createCadperDto: CreateCadperDto): Promise<Cadper> {
    const dado = await this.prisma.cADPER.create({
      data: createCadperDto,
    })
    return this.mapToEntity(dado);
  }

  async findAll(): Promise<Cadper[]> {
    const dado = await this.prisma.cADPER.findMany()
    return  dado.map((dado) => this.mapToEntity(dado));
  }

  async findOne(cdpide: number): Promise<Cadper> {
    const dado = await this.prisma.cADPER.findUnique({
      where: { cdpide }
    })
    if(!dado){
      throw new NotFoundException(`Categoria de Empresa com ID ${cdpide} não foi encntrado`)
    }
    return this.mapToEntity(dado);
  }

  async update(cdpide: number, updateCadperDto: UpdateCadperDto): Promise<Cadper> {
    const dado = await this.prisma.cADPER.update({
      where: { cdpide: cdpide},
      data: updateCadperDto,
    })
    return this.mapToEntity(dado);
  }

  async remove(cdpide: number): Promise<Cadper> {
    const dado = await this.prisma.cADPER.delete({
      where: { cdpide: cdpide }
    })
    return this.mapToEntity(dado);
  }
}

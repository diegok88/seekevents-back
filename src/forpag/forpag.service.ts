import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateForpagDto } from './dto/create-forpag.dto';
import { UpdateForpagDto } from './dto/update-forpag.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Forpag } from './entities/forpag.entity';

@Injectable()
export class ForpagService {
  constructor(private prisma: PrismaService) {}
   
     private mapToEntity(pagamento: any): Forpag{
       return {
         fpaide: pagamento.fpaide,
         fpades: pagamento.fpades,
         fpasta: pagamento.fpasta,
       }
     }
   
     async create(createForpagDto: CreateForpagDto): Promise<Forpag> {
       const dado = await this.prisma.fORPAG.create({
         data: createForpagDto,
       })
       return this.mapToEntity(dado);
     }
   
     async findAll(): Promise<Forpag[]> {
       const dado = await this.prisma.fORPAG.findMany()
       return  dado.map((dado) => this.mapToEntity(dado));
     }
   
     async findOne(fpaide: number): Promise<Forpag> {
       const dado = await this.prisma.fORPAG.findUnique({
         where: { fpaide }
       })
       if(!dado){
         throw new NotFoundException(`Categoria de Empresa com ID ${fpaide} não foi encntrado`)
       }
       return this.mapToEntity(dado);
     }
   
     async update(fpaide: number, UpdateForpagDto: UpdateForpagDto): Promise<Forpag> {
       const dado = await this.prisma.fORPAG.update({
         where: { fpaide: fpaide},
         data: UpdateForpagDto,
       })
       return this.mapToEntity(dado);
     }
   
     async remove(fpaide: number): Promise<Forpag> {
       const dado = await this.prisma.fORPAG.delete({
         where: { fpaide: fpaide }
       })
       return this.mapToEntity(dado);
     }
}

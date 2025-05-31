import { Module } from '@nestjs/common';
import { CadusuService } from './cadusu.service';
import { CadusuController } from './cadusu.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CadusuController],
  providers: [CadusuService, PrismaService],
})
export class CadusuModule {}

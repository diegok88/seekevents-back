import { Module } from '@nestjs/common';
import { CadperService } from './cadper.service';
import { CadperController } from './cadper.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CadperController],
  providers: [CadperService, PrismaService],
})
export class CadperModule {}

import { Module } from '@nestjs/common';
import { CadendService } from './cadend.service';
import { CadendController } from './cadend.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CadendController],
  providers: [CadendService, PrismaService],
})
export class CadendModule {}

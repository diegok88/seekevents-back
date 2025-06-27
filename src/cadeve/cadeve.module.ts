import { Module } from '@nestjs/common';
import { CadeveService } from './cadeve.service';
import { CadeveController } from './cadeve.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CadeveController],
  providers: [CadeveService, PrismaService],
})
export class CadeveModule {}

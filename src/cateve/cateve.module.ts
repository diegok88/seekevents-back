import { Module } from '@nestjs/common';
import { CateveService } from './cateve.service';
import { CateveController } from './cateve.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CateveController],
  providers: [CateveService, PrismaService],
})
export class CateveModule {}

import { Module } from '@nestjs/common';
import { CatempService } from './catemp.service';
import { CatempController } from './catemp.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CatempController],
  providers: [CatempService, PrismaService],
})
export class CatempModule {}

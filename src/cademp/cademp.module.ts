import { Module } from '@nestjs/common';
import { CadempService } from './cademp.service';
import { CadempController } from './cademp.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CadempController],
  providers: [CadempService, PrismaService],
})
export class CadempModule {}

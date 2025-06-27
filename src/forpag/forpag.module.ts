import { Module } from '@nestjs/common';
import { ForpagService } from './forpag.service';
import { ForpagController } from './forpag.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ForpagController],
  providers: [ForpagService, PrismaService],
})
export class ForpagModule {}

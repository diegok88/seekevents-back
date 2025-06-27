import { Module } from '@nestjs/common';
import { TabdivService } from './tabdiv.service';
import { TabdivController } from './tabdiv.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TabdivController],
  providers: [TabdivService, PrismaService],
})
export class TabdivModule {}

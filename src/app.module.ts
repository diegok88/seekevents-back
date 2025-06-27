import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatempModule } from './catemp/catemp.module';
import { CadusuModule } from './cadusu/cadusu.module';
import { CadperModule } from './cadper/cadper.module';
import { CadempModule } from './cademp/cademp.module';
import { CadendModule } from './cadend/cadend.module';
import { CateveModule } from './cateve/cateve.module';
import { ForpagModule } from './forpag/forpag.module';
import { TabdivModule } from './tabdiv/tabdiv.module';
import { CadeveModule } from './cadeve/cadeve.module';
import { PrismaService } from 'prisma/prisma.service';


@Module({
  imports: [
    //baixar dependencias
    //npm install @nestjs/serve-static 
    //npm install --save-dev @types/serve-static
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    
    CatempModule,
    CadendModule,
    CadempModule,
    CadperModule,
    CadusuModule,
    CateveModule,
    ForpagModule,
    TabdivModule,
    CadeveModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

//apos finalizar criar uma pasta no projeto = "mkdir uploads"
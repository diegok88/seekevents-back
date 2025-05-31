import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatempModule } from './catemp/catemp.module';
import { CadusuModule } from './cadusu/cadusu.module';
import { CadperModule } from './cadper/cadper.module';
import { CadempModule } from './cademp/cademp.module';
import { CadendModule } from './cadend/cadend.module';

@Module({
  imports: [CatempModule, CadendModule, CadempModule, CadperModule, CadusuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

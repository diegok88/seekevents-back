import { Test, TestingModule } from '@nestjs/testing';
import { CadusuController } from './cadusu.controller';
import { CadusuService } from './cadusu.service';

describe('CadusuController', () => {
  let controller: CadusuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadusuController],
      providers: [CadusuService],
    }).compile();

    controller = module.get<CadusuController>(CadusuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

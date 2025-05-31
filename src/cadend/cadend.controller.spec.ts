import { Test, TestingModule } from '@nestjs/testing';
import { CadendController } from './cadend.controller';
import { CadendService } from './cadend.service';

describe('CadendController', () => {
  let controller: CadendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadendController],
      providers: [CadendService],
    }).compile();

    controller = module.get<CadendController>(CadendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

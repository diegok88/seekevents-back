import { Test, TestingModule } from '@nestjs/testing';
import { CadperController } from './cadper.controller';
import { CadperService } from './cadper.service';

describe('CadperController', () => {
  let controller: CadperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadperController],
      providers: [CadperService],
    }).compile();

    controller = module.get<CadperController>(CadperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

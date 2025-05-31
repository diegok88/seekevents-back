import { Test, TestingModule } from '@nestjs/testing';
import { CadempController } from './cademp.controller';
import { CadempService } from './cademp.service';

describe('CadempController', () => {
  let controller: CadempController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadempController],
      providers: [CadempService],
    }).compile();

    controller = module.get<CadempController>(CadempController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

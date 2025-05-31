import { Test, TestingModule } from '@nestjs/testing';
import { CatempController } from './catemp.controller';
import { CatempService } from './catemp.service';

describe('CatempController', () => {
  let controller: CatempController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatempController],
      providers: [CatempService],
    }).compile();

    controller = module.get<CatempController>(CatempController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

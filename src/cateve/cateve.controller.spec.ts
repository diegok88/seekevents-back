import { Test, TestingModule } from '@nestjs/testing';
import { CateveController } from './cateve.controller';
import { CateveService } from './cateve.service';

describe('CateveController', () => {
  let controller: CateveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CateveController],
      providers: [CateveService],
    }).compile();

    controller = module.get<CateveController>(CateveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

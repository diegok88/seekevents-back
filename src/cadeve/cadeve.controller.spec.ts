import { Test, TestingModule } from '@nestjs/testing';
import { CadeveController } from './cadeve.controller';
import { CadeveService } from './cadeve.service';

describe('CadeveController', () => {
  let controller: CadeveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadeveController],
      providers: [CadeveService],
    }).compile();

    controller = module.get<CadeveController>(CadeveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

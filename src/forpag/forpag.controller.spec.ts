import { Test, TestingModule } from '@nestjs/testing';
import { ForpagController } from './forpag.controller';
import { ForpagService } from './forpag.service';

describe('ForpagController', () => {
  let controller: ForpagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForpagController],
      providers: [ForpagService],
    }).compile();

    controller = module.get<ForpagController>(ForpagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TabdivController } from './tabdiv.controller';
import { TabdivService } from './tabdiv.service';

describe('TabdivController', () => {
  let controller: TabdivController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabdivController],
      providers: [TabdivService],
    }).compile();

    controller = module.get<TabdivController>(TabdivController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

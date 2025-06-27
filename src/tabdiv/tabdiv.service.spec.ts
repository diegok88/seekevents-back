import { Test, TestingModule } from '@nestjs/testing';
import { TabdivService } from './tabdiv.service';

describe('TabdivService', () => {
  let service: TabdivService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabdivService],
    }).compile();

    service = module.get<TabdivService>(TabdivService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

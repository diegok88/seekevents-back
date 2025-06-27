import { Test, TestingModule } from '@nestjs/testing';
import { CateveService } from './cateve.service';

describe('CateveService', () => {
  let service: CateveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CateveService],
    }).compile();

    service = module.get<CateveService>(CateveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

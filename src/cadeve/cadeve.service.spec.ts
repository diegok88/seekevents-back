import { Test, TestingModule } from '@nestjs/testing';
import { CadeveService } from './cadeve.service';

describe('CadeveService', () => {
  let service: CadeveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadeveService],
    }).compile();

    service = module.get<CadeveService>(CadeveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

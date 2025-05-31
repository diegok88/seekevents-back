import { Test, TestingModule } from '@nestjs/testing';
import { CadendService } from './cadend.service';

describe('CadendService', () => {
  let service: CadendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadendService],
    }).compile();

    service = module.get<CadendService>(CadendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

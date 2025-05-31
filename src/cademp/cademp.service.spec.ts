import { Test, TestingModule } from '@nestjs/testing';
import { CadempService } from './cademp.service';

describe('CadempService', () => {
  let service: CadempService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadempService],
    }).compile();

    service = module.get<CadempService>(CadempService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

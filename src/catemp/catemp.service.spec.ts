import { Test, TestingModule } from '@nestjs/testing';
import { CatempService } from './catemp.service';

describe('CatempService', () => {
  let service: CatempService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatempService],
    }).compile();

    service = module.get<CatempService>(CatempService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

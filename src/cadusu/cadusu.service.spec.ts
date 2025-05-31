import { Test, TestingModule } from '@nestjs/testing';
import { CadusuService } from './cadusu.service';

describe('CadusuService', () => {
  let service: CadusuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadusuService],
    }).compile();

    service = module.get<CadusuService>(CadusuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

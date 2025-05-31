import { Test, TestingModule } from '@nestjs/testing';
import { CadperService } from './cadper.service';

describe('CadperService', () => {
  let service: CadperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadperService],
    }).compile();

    service = module.get<CadperService>(CadperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

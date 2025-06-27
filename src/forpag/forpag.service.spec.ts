import { Test, TestingModule } from '@nestjs/testing';
import { ForpagService } from './forpag.service';

describe('ForpagService', () => {
  let service: ForpagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForpagService],
    }).compile();

    service = module.get<ForpagService>(ForpagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

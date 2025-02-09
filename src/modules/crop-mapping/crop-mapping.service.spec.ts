import { Test, TestingModule } from '@nestjs/testing';
import { CropMappingService } from './crop-mapping.service';

describe('CropMappingService', () => {
  let service: CropMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CropMappingService],
    }).compile();

    service = module.get<CropMappingService>(CropMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

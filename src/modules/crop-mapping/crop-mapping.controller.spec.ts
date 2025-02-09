import { Test, TestingModule } from '@nestjs/testing';
import { CropMappingController } from './crop-mapping.controller';

describe('CropMappingController', () => {
  let controller: CropMappingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CropMappingController],
    }).compile();

    controller = module.get<CropMappingController>(CropMappingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

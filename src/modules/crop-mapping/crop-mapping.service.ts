import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CropMapping } from './model/crop-mapping.entity';
import { CreateCropMappingDto, CropMappingQuery } from './model/crop-mapping.dto';

@Injectable()
export class CropMappingService {
  constructor(
    @InjectRepository(CropMapping)
    private cropMappingRepository: Repository<CropMapping>,
  ) {}

  findAll(cropMappingQuery: CropMappingQuery): Promise<CropMapping[]> {
    return this.cropMappingRepository.find();
  }

  create(createCropMappingDto: CreateCropMappingDto): Promise<CropMapping> {
    const cropMapping = this.cropMappingRepository.create(createCropMappingDto);
    return this.cropMappingRepository.save(cropMapping);
  }
}

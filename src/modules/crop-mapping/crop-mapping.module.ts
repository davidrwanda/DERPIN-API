import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CropMappingService } from './crop-mapping.service';
import { CropMappingController } from './crop-mapping.controller';
import { CropMapping } from './model/crop-mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CropMapping])],
  providers: [CropMappingService],
  controllers: [CropMappingController]
})
export class CropMappingModule {}

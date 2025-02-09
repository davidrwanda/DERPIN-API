import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prediction } from './model/prediction.entity';
import { CreatePredictionDto, PredictionQuery } from './model/prediction.dto';
    
@Injectable()
export class PredictionService {
  constructor(
    @InjectRepository(Prediction)
    private predictionRepository: Repository<Prediction>,
  ) {}

  findAll(predictionQuery: PredictionQuery): Promise<Prediction[]> {
    return this.predictionRepository.find();
  }

  create(createPredictionDto: CreatePredictionDto): Promise<Prediction> {
    const prediction = this.predictionRepository.create(createPredictionDto);
    return this.predictionRepository.save(prediction);
  }
}

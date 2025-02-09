import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PredictionService } from './prediction.service';
import { PredictionController } from './prediction.controller';
import { Prediction } from './model/prediction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prediction])],
  providers: [PredictionService],
  controllers: [PredictionController]
})
export class PredictionModule {}

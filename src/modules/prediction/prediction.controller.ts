   // src/modules/prediction/prediction.controller.ts
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PredictionService } from './prediction.service';
import { CreatePredictionDto, PredictionQuery } from './model/prediction.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery, ApiExtraModels, getSchemaPath } from '@nestjs/swagger';
import { Prediction } from './model/prediction.entity';

@Controller('predictions')
@ApiTags('predictions')
@ApiExtraModels(PredictionQuery)
export class PredictionController {
  constructor(private readonly predictionService: PredictionService) {}

  @Get()
  @ApiOperation({ summary: 'Get all predictions' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all predictions',
    type: Prediction,
  })
  @ApiResponse({
    status: 404,
    description: 'No predictions found',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiQuery({
    name: 'query',
    required: false,
    type: PredictionQuery,
    style: 'deepObject',
    explode: true,
    schema: { $ref: getSchemaPath(PredictionQuery) },
  })
  findAll(@Query() query: PredictionQuery) {
    return this.predictionService.findAll(query);
  }
 
//   @Post()
//   @ApiOperation({ summary: 'Create a prediction' })
//   @ApiResponse({
//     status: 201,
//     description: 'Successfully created a prediction',
//     type: Prediction,
//   })
//   @ApiResponse({
//     status: 400,
//     description: 'Invalid input',
//   })
//   create(@Body() createPredictionDto: CreatePredictionDto) {
//     return this.predictionService.create(createPredictionDto);
//   }
}

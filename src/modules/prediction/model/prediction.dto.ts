import { IsEnum, IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePredictionDto {
  readonly id: string;
  readonly feature: 'production' | 'yield';
  readonly year?: number;
  readonly country_region?: string;
  readonly crop?: string;
  readonly file?: string;
  readonly parent_id?: string;
}

export class PredictionQuery {
    @ApiProperty({ required: false, type: String })
    @IsOptional()
    @IsString()
    country?: string;
  
    @ApiProperty({ required: false, enum: ['production', 'yield'] })
    @IsOptional()
    @IsEnum(['production', 'yield'])
    feature?: 'production' | 'yield';
  
    @ApiProperty({ required: false, type: Number })
    @IsOptional()
    @IsNumber()
    year?: number;
  
    @ApiProperty({ required: false, type: String })
    @IsOptional()
    @IsString()
    crop?: string;
  }
  

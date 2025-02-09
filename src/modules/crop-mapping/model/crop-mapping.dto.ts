import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCropMappingDto {
  @IsNotEmpty()
  @IsString()
  readonly crop: string;

  @IsNotEmpty()
  @IsNumber()
  readonly year: number;

  @IsNotEmpty()
  @IsString()
  readonly file: string;

  @IsNotEmpty()
  @IsString()
  readonly parent_id: string;
}

export class CropMappingQuery {

@IsOptional()
  @IsString()
  readonly country?: string;

  @IsOptional()
  @IsString()
  readonly crop?: string;

  @IsOptional()
  @IsNumber()
  readonly year?: number;
}
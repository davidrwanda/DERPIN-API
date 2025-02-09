import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
    
export class CreateResearchDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly category: string;

  @IsNotEmpty()
  @IsString()
  readonly link: string;

  @IsNotEmpty()
  @IsString()
  readonly image_banner: string;

  @IsNotEmpty()
  @IsDate()
  readonly publication_date: Date;

  @IsNotEmpty()
  @IsDate()
  readonly last_update_date: Date;  

  @IsNotEmpty()
  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString()
  readonly language: string;

  @IsOptional()
  @IsString()
  readonly country: string;

  @IsOptional()
  @IsString()
  readonly crop: string;
  
  @IsNotEmpty()
  @IsString()
  readonly brief_id: string;

  @IsOptional()
  @IsNumber()
  readonly brief_number: number;
  
}

export class PublicationQuery {
    @ApiProperty({ required: false, type: String })
    @IsOptional()
    @IsString()
    country?: string;
  
    @ApiProperty({ required: false, type: Number })
    @IsOptional()
    @IsNumber()
    year?: number;
  
    @ApiProperty({ required: false, type: String })
    @IsOptional()
    @IsString()
    crop?: string;
  }
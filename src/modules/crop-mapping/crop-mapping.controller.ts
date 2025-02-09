  // src/modules/crop-mapping/crop-mapping.controller.ts
  import { Controller, Get, Post, Body, Query } from '@nestjs/common';
  import { CropMappingService } from './crop-mapping.service';
  import { CreateCropMappingDto, CropMappingQuery } from './model/crop-mapping.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { CropMapping } from './model/crop-mapping.entity';

  @Controller('crop-mappings')
  @ApiTags('crop-mappings')
  export class CropMappingController {
    constructor(private readonly cropMappingService: CropMappingService) {}

    @Get()
    @ApiQuery({
      name: 'query',
      required: false,
      type: CropMappingQuery,
      style: 'deepObject',
      explode: true,
      schema: { $ref: getSchemaPath(CropMappingQuery) },
    })
    @ApiResponse({
      status: 200,
      description: 'Successfully retrieved crop mappings',
      type: CropMapping,
    })
    @ApiResponse({
      status: 400,
      description: 'Invalid input',
    })
    @ApiResponse({
      status: 500,
      description: 'Internal server error',
    })
    @ApiOperation({ summary: 'Get all crop mappings' })
    findAll(@Query() cropMappingQuery: CropMappingQuery) {
      return this.cropMappingService.findAll(cropMappingQuery);
    }

    // @Post()
    // create(@Body() createCropMappingDto: CreateCropMappingDto) {
    //   return this.cropMappingService.create(createCropMappingDto);
    // }
  }
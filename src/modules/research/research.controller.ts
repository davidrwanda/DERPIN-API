   // src/modules/research/research.controller.ts
   import { Controller, Get, Post, Body, Query } from '@nestjs/common';
   import { ResearchService } from './research.service';
   import { CreateResearchDto } from './model/research.dto';
   import { ApiOperation, ApiQuery, ApiResponse, ApiTags, ApiExtraModels, getSchemaPath } from '@nestjs/swagger';
   import { PublicationQuery } from './model/research.dto';
import { Research } from './model/research.entity';

   @Controller('publications')
   @ApiTags('Publications')
   @ApiExtraModels(PublicationQuery)
   export class ResearchController {
     constructor(private readonly researchService: ResearchService) {}

     @Get()
     @ApiOperation({ summary: 'Get all publications' })
     @ApiResponse({
       status: 200,
       description: 'Successfully retrieved all publications',
       type: Research,
     })
     @ApiResponse({
       status: 404,
       description: 'No publications found',
     })
     @ApiResponse({
       status: 500,
       description: 'Internal server error',
     })
     @ApiQuery({
       name: 'query',
       required: false,
       type: PublicationQuery,
       style: 'deepObject',
       explode: true,
       schema: { $ref: getSchemaPath(PublicationQuery) },
     })
     findAll(@Query() query: PublicationQuery) {
       return this.researchService.findAll(query);
     }
   }
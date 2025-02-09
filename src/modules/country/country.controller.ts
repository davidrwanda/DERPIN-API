import { Controller, Get, Post, Body } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './model/country.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('countries')
@ApiTags('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  @ApiOperation({ summary: 'Get all countries' })
  findAll() {
    return this.countryService.findAll();
  }

//   @Post()
//   @ApiOperation({ summary: 'Create a country' })
//   create(@Body() createCountryDto: CreateCountryDto) {
//     return this.countryService.create(createCountryDto);
//   }
}

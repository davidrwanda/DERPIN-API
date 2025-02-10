import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './modules/country/country.module';
import { PredictionModule } from './modules/prediction/prediction.module';
import { CropMappingModule } from './modules/crop-mapping/crop-mapping.module';
import { ResearchModule } from './modules/research/research.module';
import { DatabaseProviders } from './core/database.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CountryModule,
    PredictionModule,
    CropMappingModule,
    ResearchModule,
    DatabaseProviders,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

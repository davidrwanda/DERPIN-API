import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResearchService } from './research.service';
import { ResearchController } from './research.controller';
import { Research } from './model/research.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Research])],
  providers: [ResearchService],
  controllers: [ResearchController]
})
export class ResearchModule {}

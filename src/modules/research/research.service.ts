import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Research } from './model/research.entity';
import { CreateResearchDto, PublicationQuery } from './model/research.dto';

@Injectable()
export class ResearchService {
  constructor(
    @InjectRepository(Research)
    private researchRepository: Repository<Research>,
  ) {}

  async findAll(query: PublicationQuery): Promise<Research[]> {
    const qb = this.researchRepository.createQueryBuilder('research');

    if (query.country) {
      qb.andWhere('research.country = :country', { country: query.country });
    }
    if (query.year) {
      qb.andWhere('research.year = :year', { year: query.year });
    }
    if (query.crop) {
      qb.andWhere('research.crop = :crop', { crop: query.crop });
    }

    return qb.getMany();
  }

  create(createResearchDto: CreateResearchDto): Promise<Research> {
    const research = this.researchRepository.create(createResearchDto);
    return this.researchRepository.save(research);
  }
}

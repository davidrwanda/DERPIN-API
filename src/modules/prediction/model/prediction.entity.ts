import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Country } from '../../country/model/country.entity';

@Entity()
export class Prediction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['production', 'yield'],
  })
  feature: string;

  @Column('decimal', { nullable: true })
  year: number;

  @Column('text', { nullable: true })
  country_region: string;

  @Column('text', { nullable: true })
  crop: string;

  @Column('text', { nullable: true })
  file: string;

  @ManyToOne(() => Country, (country) => country.id, { onDelete: 'SET NULL' })
  parent: Country;
}

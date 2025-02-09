import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Country } from '../../country/model/country.entity';

@Entity()
export class CropMapping {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: true })
  crop: string;

  @Column('decimal', { nullable: true })
  year: number;

  @Column('text', { nullable: true })
  file: string;

  @ManyToOne(() => Country, (country) => country.id, { onDelete: 'SET NULL' })
  parent: Country;
}

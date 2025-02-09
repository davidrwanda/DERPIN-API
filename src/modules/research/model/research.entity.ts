import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Research {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  title: string;

  @Column('varchar', { length: 255 })
  category: string;

  @Column('varchar', { length: 500 })
  link: string;

  @Column('varchar', { length: 255 })
  image_banner: string;

  @Column('datetime')
  publication_date: Date;

  @Column('datetime')
  last_update_date: Date;

  @Column('int', { nullable: true })
  year: number;

  @Column('varchar', { length: 55, nullable: true })
  language: string;

  @Column('varchar', { length: 55, nullable: true })
  country: string;

  @Column('varchar', { length: 55, nullable: true })
  crop: string;

  @Column('varchar', { length: 55 })
  brief_id: string;

  @Column('int', { nullable: true })
  brief_number: number;
}


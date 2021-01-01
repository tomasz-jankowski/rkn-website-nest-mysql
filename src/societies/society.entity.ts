import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { SocietyType } from './society-type.enum';

@Entity()
export class Society extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Unique(['name'])
  @Column()
  name: string;

  @Unique(['slug'])
  @Column()
  slug: string;

  @Column()
  abbreviation: string;

  @Column()
  email: string;

  @Column()
  website: string;

  @Column()
  description: string;

  @Column({ default: 'undefined' })
  type: SocietyType;

  @Column({ default: true })
  visible: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

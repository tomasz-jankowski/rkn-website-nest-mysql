import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { generateSlug } from '../common/generate-slug';
import { SocietyDto } from './dto/create-society.dto';
import { Society } from './society.entity';

@EntityRepository(Society)
export class SocietiesRepository extends Repository<Society> {
  async createSociety(createSocietyDto: SocietyDto): Promise<Society> {
    const society = new Society();

    for (const property in createSocietyDto)
      society[property] = createSocietyDto[property];

    society.slug = generateSlug(society.name);

    try {
      await society.save();
    } catch (err) {
      throw new InternalServerErrorException(err);
    }

    return society;
  }
}

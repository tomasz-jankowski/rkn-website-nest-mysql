import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { generateSlug } from '../common/generate-slug';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { Faculty } from './faculty.entity';

@EntityRepository(Faculty)
export class FacultiesRepository extends Repository<Faculty> {
  async createFaculty(createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    const faculty = new Faculty();

    for (const property in createFacultyDto)
      faculty[property] = createFacultyDto[property];

    faculty.slug = generateSlug(faculty.name);

    try {
      await faculty.save();
    } catch (err) {
      throw new InternalServerErrorException(err);
    }

    return faculty;
  }
}

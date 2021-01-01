import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateSlug } from '../common/generate-slug';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { FacultiesRepository } from './faculties.repository';
import { Faculty } from './faculty.entity';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(FacultiesRepository)
    private facultiesRepository: FacultiesRepository,
  ) {}

  async getFaculties(): Promise<Faculty[]> {
    return await this.facultiesRepository.find();
  }

  async getFacultyById(id: number): Promise<Faculty> {
    return await this.facultiesRepository.findOne(id);
  }

  async createFaculty(createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    return this.facultiesRepository.createFaculty(createFacultyDto);
  }

  async updateFacultyName(
    id: number,
    createFacultyDto: CreateFacultyDto,
  ): Promise<Faculty> {
    const faculty = await this.getFacultyById(id);
    faculty.name = createFacultyDto.name;
    faculty.slug = generateSlug(faculty.name);

    return await faculty.save();
  }

  async deleteFaculty(id: number): Promise<void> {
    const result = await this.facultiesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Faculty with ID "${id} not found!`);
    }
  }
}

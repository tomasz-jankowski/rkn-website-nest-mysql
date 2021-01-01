import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateSlug } from '../common/generate-slug';
import { SocietyDto } from './dto/create-society.dto';
import { SocietiesRepository } from './societies.repository';
import { Society } from './society.entity';

@Injectable()
export class SocietiesService {
  constructor(
    @InjectRepository(SocietiesRepository)
    private societiesRepository: SocietiesRepository,
  ) {}

  async getSocieties(): Promise<Society[]> {
    return await this.societiesRepository.find();
  }

  async getSocietyById(id: number): Promise<Society> {
    return await this.societiesRepository.findOne(id);
  }

  async createSociety(createSocietyDto: SocietyDto): Promise<Society> {
    return this.societiesRepository.createSociety(createSocietyDto);
  }

  async updateSociety(id, updateSocietyDto: SocietyDto): Promise<Society> {
    const society = await this.getSocietyById(id);
    for (const property in updateSocietyDto)
      society[property] = updateSocietyDto[property];
    society.slug = generateSlug(society.name);
    return await society.save();
  }

  // async updateSocietyProperty(
  //   id: number,
  //   property: string,
  //   updateSocietyProperty: SocietyDto,
  // ): Promise<Society> {
  //   const society = await this.getSocietyById(id);
  //   society[property] = updateSocietyProperty[property];
  //   return await society.save();
  // }

  async deleteSociety(id: number): Promise<void> {
    const result = await this.societiesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Society with ID "${id} not found!`);
    }
  }
}

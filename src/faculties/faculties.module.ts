import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesController } from './faculties.controller';
import { FacultiesRepository } from './faculties.repository';
import { FacultiesService } from './faculties.service';

@Module({
  imports: [TypeOrmModule.forFeature([FacultiesRepository])],
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule {}

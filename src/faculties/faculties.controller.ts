import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { Faculty } from './faculty.entity';
import { CreateFacultyDto } from './dto/create-faculty.dto';

@Controller('faculties')
export class FacultiesController {
  constructor(private facultiesService: FacultiesService) {}

  @Get()
  getFaculties(): Promise<Faculty[]> {
    return this.facultiesService.getFaculties();
  }

  @Get('/:id')
  getFacultyById(@Param('id', ParseIntPipe) id: number): Promise<Faculty> {
    return this.facultiesService.getFacultyById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createFaculty(@Body() createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    return this.facultiesService.createFaculty(createFacultyDto);
  }

  @Patch('/:id/name')
  updateFacultyName(
    @Param('id', ParseIntPipe) id: number,
    @Body() createFacultyDto: CreateFacultyDto,
  ): Promise<Faculty> {
    return this.facultiesService.updateFacultyName(id, createFacultyDto);
  }

  @Delete('/:id')
  deleteFaculty(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.facultiesService.deleteFaculty(id);
  }
}

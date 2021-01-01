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
} from '@nestjs/common';
import { SocietyDto } from './dto/create-society.dto';
import { SocietiesService } from './societies.service';
import { Society } from './society.entity';

@Controller('societies')
export class SocietiesController {
  constructor(private societiesService: SocietiesService) {}

  @Get()
  getSocieties(): Promise<Society[]> {
    return this.societiesService.getSocieties();
  }

  @Get('/:id')
  getSocietyById(@Param('id', ParseIntPipe) id: number): Promise<Society> {
    return this.societiesService.getSocietyById(id);
  }

  @Post()
  createSociety(@Body() createSocietyDto: SocietyDto): Promise<Society> {
    return this.societiesService.createSociety(createSocietyDto);
  }

  @Put('/:id')
  updateSociety(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSocietyDto: SocietyDto,
  ): Promise<Society> {
    return this.societiesService.updateSociety(id, updateSocietyDto);
  }

  // @Patch('/:id/:property')
  // updateSocietyProperty(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Param('property') property: string,
  //   @Body() updateSocietyProperty: SocietyDto,
  // ): Promise<Society> {
  //   return this.societiesService.updateSocietyProperty(
  //     id,
  //     property,
  //     updateSocietyProperty,
  //   );
  // }

  @Delete('/:id')
  deleteSociety(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.societiesService.deleteSociety(id);
  }
}

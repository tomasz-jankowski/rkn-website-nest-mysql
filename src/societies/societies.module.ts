import { Module } from '@nestjs/common';
import { SocietiesService } from './societies.service';
import { SocietiesController } from './societies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocietiesRepository } from './societies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SocietiesRepository])],
  providers: [SocietiesService],
  controllers: [SocietiesController],
})
export class SocietiesModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { FacultiesModule } from './faculties/faculties.module';
import { SocietiesModule } from './societies/societies.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), FacultiesModule, SocietiesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { SocietyType } from '../society-type.enum';

export class SocietyDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsOptional()
  @IsString()
  abbreviation: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsUrl()
  website: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(SocietyType)
  type: string;
}

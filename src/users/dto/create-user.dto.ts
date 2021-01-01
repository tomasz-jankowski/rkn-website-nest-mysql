import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { IsPutDomain } from '../../common/email-domain.decorator';

export class CreateUserDto {
  @IsEmail()
  @IsPutDomain()
  email: string;

  @IsString()
  //   @MinLength(8)
  @Matches(
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {
      message:
        'Hasło musi zawierać: \\n - min. 8 znaków \\n - znak specjalny \\n - duże i małe litery',
    },
  )
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  index: number;

  @IsOptional()
  @IsPhoneNumber('PL')
  phone: number;
}

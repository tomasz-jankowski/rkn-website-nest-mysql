import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    for (const property in createUserDto)
      user[property] = createUserDto[property];

    try {
      await user.save();
    } catch (err) {
      throw new InternalServerErrorException(err);
    }

    return user;
  }
}

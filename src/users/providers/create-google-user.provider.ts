import {
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateGoogleUserDto } from '../dtos/create-google-user.dto';

@Injectable()
export class CreateGoogleUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  public async createGoogleUser(createGoogleUserDto: CreateGoogleUserDto) {
    try {
      let newUser = this.usersRepository.create(createGoogleUserDto);
      return await this.usersRepository.save(newUser);
    } catch (error) {
      throw new ConflictException('Error saving user', {
        description: error,
      });
    }
  }
}

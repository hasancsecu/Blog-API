import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async findAll(
    getUsersParamsDto: GetUsersParamsDto,
    linit: number,
    page: number,
  ) {
    return await this.userRepository.find();
  }

  public findOneById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  public async create(createUserDto: CreateUserDto) {
    let existingUser;
    try {
      existingUser = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'Database connection gone. try again later',
      );
    }

    if (existingUser) {
      throw new BadRequestException(
        'User already exists. please provide a different email',
      );
    }

    let newUser = this.userRepository.create(createUserDto);
    newUser = await this.userRepository.save(newUser);

    return newUser;
  }
}

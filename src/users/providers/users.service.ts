import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUsersParamsDto: GetUsersParamsDto,
    linit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'Hasan',
        email: 'hellohasan@email.com',
      },
      {
        firstName: 'Sourav',
        email: 'hellosourav@email.com',
      },
    ];
  }

  public findOneById(id: number) {
    return {
      firstName: 'Sourav',
      email: 'hellosourav@email.com',
    };
  }
}

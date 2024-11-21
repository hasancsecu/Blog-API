import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id?')
  public GetUsers(
    @Param() getUsersParamsDto: GetUsersParamsDto,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return getUsersParamsDto.id + ' -> ' + page + ' -> ' + limit;
  }

  @Post()
  public CreateUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  @Patch()
  public PatchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}

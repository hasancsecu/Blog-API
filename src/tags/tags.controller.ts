import { Body, Controller, Post } from '@nestjs/common';
import { TagsService } from './providers/tags.service';
import { CreateTagDto } from './dtos/create-tag.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @ApiOperation({
    summary: 'Create a tag',
  })
  @ApiResponse({ status: 201, description: 'Tag Created Succesfully' })
  @Post()
  public Create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }
}

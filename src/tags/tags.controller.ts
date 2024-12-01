import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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

  @ApiOperation({
    summary: 'Delete a tag',
  })
  @ApiResponse({ status: 200, description: 'Tag Deleted Succesfully' })
  @Delete('/:id')
  public Delete(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.delete(id);
  }

  @ApiOperation({
    summary: 'Soft Delete a tag',
  })
  @ApiResponse({ status: 200, description: 'Tag Soft Deleted Succesfully' })
  @Delete('/soft-delete/:id')
  public SoftDelete(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.softDelete(id);
  }
}

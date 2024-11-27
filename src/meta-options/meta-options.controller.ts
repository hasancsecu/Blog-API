import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './providers/meta-options.service';
import { CreatePostMetaOptionsDto } from './dtos/create-post-metaoptions';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('meta-options')
@ApiTags('Meta Options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @ApiOperation({
    summary: 'Create a meta option',
  })
  @ApiResponse({ status: 201, description: 'Meta option Created Succesfully' })
  @Post()
  public Create(@Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    return this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}

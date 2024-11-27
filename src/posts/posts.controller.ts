import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  public GetPosts() {
    return this.postsService.findAll();
  }

  @ApiOperation({
    summary: 'Create a blog post',
  })
  @ApiResponse({ status: 201, description: 'Post Created Succesfully' })
  @Post()
  public CreatePost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
  }

  @ApiOperation({
    summary: 'Update a blog post',
  })
  @ApiResponse({ status: 200, description: 'Post Updated Succesfully' })
  @Patch('/:id')
  public UpdatePost(@Body() patchPostDto: PatchPostDto) {
    return patchPostDto;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  public GetPosts() {
    return this.postsService.findAll();
  }

  @Post()
  public CreatePost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
  }
}

import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly tagsService: TagsService,
    private readonly usersService: UsersService,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(MetaOption)
    private metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async findAll() {
    return await this.postRepository.find();
  }

  public async create(createPostDto: CreatePostDto) {
    let tags = await this.tagsService.findMultipleTags(createPostDto.tags);

    let author = await this.usersService.findOneById(createPostDto.authorId);
    console.log(author);
    let newPost = this.postRepository.create({
      ...createPostDto,
      author,
      tags,
    });

    return await this.postRepository.save(newPost);
  }

  public async delete(id: number) {
    let post = await this.postRepository.findOneBy({ id });

    await this.postRepository.delete(id);

    await this.metaOptionsRepository.delete(post.metaOptions.id);

    return { deleted: true, id };
  }
}

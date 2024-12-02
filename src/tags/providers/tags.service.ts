import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Tag } from '../tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from '../dtos/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  public async create(createTagDto: CreateTagDto) {
    let newtag = this.tagsRepository.create(createTagDto);

    newtag = await this.tagsRepository.save(newtag);

    return newtag;
  }

  public async findMultipleTags(tags: number[]) {
    return await this.tagsRepository.find({ where: { id: In(tags) } });
  }

  public async delete(id: number) {
    let tag = await this.tagsRepository.findOneBy({ id });

    await this.tagsRepository.delete(tag.id);

    return { deleted: true, id };
  }

  public async softDelete(id: number) {
    let tag = await this.tagsRepository.findOneBy({ id });

    await this.tagsRepository.softDelete(tag.id);

    return { deleted: true, id };
  }
}

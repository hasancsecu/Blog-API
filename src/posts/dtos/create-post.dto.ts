import { PostStatus } from '../enums/post-status.enum';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/post-type.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-metaoptions';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  @MaxLength(512)
  title: string;

  @ApiProperty({ enum: PostType })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  @MaxLength(256)
  slug: string;

  @ApiProperty({ enum: PostStatus })
  @IsEnum(PostStatus)
  @IsNotEmpty()
  status: PostStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiPropertyOptional()
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  tags?: number[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  authorId?: number;

  @ApiPropertyOptional({ type: 'object' })
  @IsOptional()
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions: CreatePostMetaOptionsDto | null;
}

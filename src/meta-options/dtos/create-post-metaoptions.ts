import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMetaOptionsDto {
  @ApiProperty({ type: 'object' })
  @IsString()
  @IsNotEmpty()
  metaValue: any;
}

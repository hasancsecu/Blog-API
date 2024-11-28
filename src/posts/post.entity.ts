import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostType } from './enums/post-type.enum';
import { PostStatus } from './enums/post-status.enum';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Tag } from 'src/tags/tag.entity';
import { User } from 'src/users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.POST,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 256,
    unique: true,
    nullable: false,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    nullable: false,
    default: PostStatus.DRAFT,
  })
  status: PostStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishOn?: Date;

  @ManyToMany(() => Tag, { eager: true })
  @JoinTable()
  tags?: Tag[];

  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  metaOptions?: MetaOption;

  @ManyToOne(() => User, (user) => user.posts, {
    eager: true,
  })
  author: User;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  UpdateDate: Date;
}

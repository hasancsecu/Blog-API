import { Post } from 'src/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MetaOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'json',
    nullable: false,
  })
  metaValue: string;

  @OneToOne(() => Post, (post) => post.metaOptions)
  post: Post;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  UpdateDate: Date;
}

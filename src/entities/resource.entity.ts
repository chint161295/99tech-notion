import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./common.entity";

export enum ResourceType {
  BOOK = "book",
  VIDEO = "video",
  ARTICLE = "article",
  PODCAST = "podcast",
  OTHER = "other",
  // Add more types as needed
}

@Entity({
  name: 'resources',
})
export class Resource extends CommonEntity {
  constructor(partial: Partial<Resource>) {
    super(partial); 
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ResourceType,
    default: ResourceType.OTHER
  })
  type: string;
}
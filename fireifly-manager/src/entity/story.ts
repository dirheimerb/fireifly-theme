import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Story {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 100,
  })
  name: string;
  @Column("text")
  description: string;
  @Column()
  filename: string;
  @Column()
  status: string;
  @Column()
  acceptance: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genre')
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 40, nullable: false })
  name: string;
}

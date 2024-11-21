import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('u4-factory')
export class VehicleFactory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 60, nullable: false })
  name: string;

  @CreateDateColumn({ name: 'created-at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated-at' })
  updatedAt: Date;
}

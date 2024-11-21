import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleFactory } from '../vehicle-factories/vehicle-factory.entity';

@Entity('u4-model')
export class VehicleModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 60, nullable: false })
  name: string;

  @ManyToOne(() => VehicleFactory, { eager: true, nullable: false })
  @JoinColumn({ name: 'factory-id' })
  factory: VehicleFactory;

  @CreateDateColumn({ name: 'created-at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated-at' })
  updatedAt: Date;
}

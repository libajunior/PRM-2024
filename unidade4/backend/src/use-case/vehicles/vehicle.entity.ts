import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleType } from '../vehicle-types/vehicle-type.entity';
import { VehicleModel } from '../vehicle-models/vehicle-model.entity';

@Entity('u4-vehicle')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ nullable: false })
  photo: string;

  @Column({ name: 'year-factory', nullable: false })
  yearFactory: number;

  @Column({ name: 'year-model', nullable: false })
  yearModel: number;

  @Column({
    name: 'price',
    type: 'decimal',
    nullable: false,
    precision: 10,
    scale: 2,
  })
  priceRent: number;

  @ManyToOne(() => VehicleType, { eager: true, nullable: false })
  @JoinColumn({ name: 'type-id' })
  type: VehicleType;

  @ManyToOne(() => VehicleModel, { eager: true, nullable: false })
  @JoinColumn({ name: 'model-id' })
  model: VehicleModel;

  @CreateDateColumn({ name: 'created-at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated-at' })
  updatedAt: Date;
}

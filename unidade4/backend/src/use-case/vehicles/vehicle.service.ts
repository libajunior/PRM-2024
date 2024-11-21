import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Vehicle } from './vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private repository: Repository<Vehicle>,
  ) {}

  findAll(): Promise<Vehicle[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Vehicle> {
    return this.repository.findOneBy({ id: id });
  }

  save(vehicle: Vehicle): Promise<Vehicle> {
    return this.repository.save(vehicle);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

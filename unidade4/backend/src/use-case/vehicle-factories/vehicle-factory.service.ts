import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { VehicleFactory } from './vehicle-factory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleFactoryService {
  constructor(
    @InjectRepository(VehicleFactory)
    private repository: Repository<VehicleFactory>,
  ) {}

  findAll(): Promise<VehicleFactory[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<VehicleFactory> {
    return this.repository.findOneBy({ id: id });
  }

  save(vehicleFactory: VehicleFactory): Promise<VehicleFactory> {
    return this.repository.save(vehicleFactory);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

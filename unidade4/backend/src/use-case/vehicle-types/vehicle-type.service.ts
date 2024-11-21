import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { VehicleType } from './vehicle-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleTypeService {
  constructor(
    @InjectRepository(VehicleType)
    private repository: Repository<VehicleType>,
  ) {}

  findAll(): Promise<VehicleType[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<VehicleType> {
    return this.repository.findOneBy({ id: id });
  }

  save(vehicleType: VehicleType): Promise<VehicleType> {
    return this.repository.save(vehicleType);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

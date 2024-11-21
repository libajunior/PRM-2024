import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { VehicleModel } from './vehicle-model.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleModelService {
  constructor(
    @InjectRepository(VehicleModel)
    private repository: Repository<VehicleModel>,
  ) {}

  findAll(): Promise<VehicleModel[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<VehicleModel> {
    return this.repository.findOneBy({ id: id });
  }

  save(vehicleModel: VehicleModel): Promise<VehicleModel> {
    return this.repository.save(vehicleModel);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

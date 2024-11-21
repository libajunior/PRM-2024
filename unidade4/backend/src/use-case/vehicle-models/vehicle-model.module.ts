import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleModel } from './vehicle-model.entity';
import { VehicleModelService } from './vehicle-model.service';
import { VehicleModelController } from './vehicle-model.controller';
import { VehicleFactory } from '../vehicle-factories/vehicle-factory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleFactory, VehicleModel])],
  providers: [VehicleModelService],
  controllers: [VehicleModelController],
})
export class VehicleModelModule {}

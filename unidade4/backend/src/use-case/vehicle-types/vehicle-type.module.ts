import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleType } from './vehicle-type.entity';
import { VehicleTypeService } from './vehicle-type.service';
import { VehicleTypeController } from './vehicle-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleType])],
  providers: [VehicleTypeService],
  controllers: [VehicleTypeController],
})
export class VehicleTypeModule {}

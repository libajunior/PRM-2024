import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleFactoryController } from './vehicle-factory.controller';
import { VehicleFactory } from './vehicle-factory.entity';
import { VehicleFactoryService } from './vehicle-factory.service';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleFactory])],
  providers: [VehicleFactoryService],
  controllers: [VehicleFactoryController],
})
export class VehicleFactoryModule {}

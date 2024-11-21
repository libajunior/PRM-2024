import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { SupabaseModule } from 'src/@libs/supabase/supabase.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle]), SupabaseModule],
  providers: [VehicleService],
  controllers: [VehicleController],
})
export class VehicleModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleFactoryModule } from './use-case/vehicle-factories/vehicle-factory.module';
import { VehicleModelModule } from './use-case/vehicle-models/vehicle-model.module';
import { VehicleTypeModule } from './use-case/vehicle-types/vehicle-type.module';
import { VehicleModule } from './use-case/vehicles/vehicle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      autoLoadEntities: true,
      migrations: [`${__dirname}/migration/*.{ts,js}`],
      migrationsRun: true,
      migrationsTableName: 'u4-migration',
    }),
    VehicleFactoryModule,
    VehicleModelModule,
    VehicleTypeModule,
    VehicleModule,
  ],
})
export class AppModule {}

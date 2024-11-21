import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { VehicleFactoryService } from './vehicle-factory.service';
import { VehicleFactory } from './vehicle-factory.entity';

@Controller('/vehicle-factories')
export class VehicleFactoryController {
  constructor(private service: VehicleFactoryService) {}

  @Get()
  findAll(): Promise<VehicleFactory[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<VehicleFactory> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException(
        'Vehicle factory not found',
        HttpStatus.NOT_FOUND,
      );

    return found;
  }

  @Post()
  create(@Body() vehicleFactory: VehicleFactory): Promise<VehicleFactory> {
    return this.service.save(vehicleFactory);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() vehicleFactory: VehicleFactory,
  ): Promise<VehicleFactory> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException(
        'Vehicle factory not found',
        HttpStatus.NOT_FOUND,
      );

    vehicleFactory.id = found.id;

    return this.service.save(vehicleFactory);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException(
        'Vehicle factory not found',
        HttpStatus.NOT_FOUND,
      );

    return this.service.remove(id);
  }
}

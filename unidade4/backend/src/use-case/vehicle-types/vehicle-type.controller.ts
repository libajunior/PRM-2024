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
import { VehicleTypeService } from './vehicle-type.service';
import { VehicleType } from './vehicle-type.entity';

@Controller('/vehicle-types')
export class VehicleTypeController {
  constructor(private service: VehicleTypeService) {}

  @Get()
  findAll(): Promise<VehicleType[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<VehicleType> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle type not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() vehicleType: VehicleType): Promise<VehicleType> {
    return this.service.save(vehicleType);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() vehicleType: VehicleType,
  ): Promise<VehicleType> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle type not found', HttpStatus.NOT_FOUND);

    vehicleType.id = found.id;

    return this.service.save(vehicleType);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle type not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }
}

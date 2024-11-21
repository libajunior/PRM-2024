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
import { VehicleModelService } from './vehicle-model.service';
import { VehicleModel } from './vehicle-model.entity';

@Controller('/vehicle-models')
export class VehicleModelController {
  constructor(private service: VehicleModelService) {}

  @Get()
  findAll(): Promise<VehicleModel[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<VehicleModel> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle model not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() vehicleModel: VehicleModel): Promise<VehicleModel> {
    return this.service.save(vehicleModel);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() vehicleModel: VehicleModel,
  ): Promise<VehicleModel> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle model not found', HttpStatus.NOT_FOUND);

    vehicleModel.id = found.id;

    return this.service.save(vehicleModel);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle model not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }
}

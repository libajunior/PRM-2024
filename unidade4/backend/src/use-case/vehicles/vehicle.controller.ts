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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle.entity';
import { SupabaseService } from 'src/@libs/supabase/supabase.service';

@Controller('/vehicles')
export class VehicleController {
  constructor(
    private readonly service: VehicleService,
    private readonly supabaseService: SupabaseService,
  ) {}

  @Get()
  findAll(): Promise<Vehicle[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Vehicle> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() vehicle: Vehicle): Promise<Vehicle> {
    return this.service.save(vehicle);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() vehicle: Vehicle,
  ): Promise<Vehicle> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle not found', HttpStatus.NOT_FOUND);

    vehicle.id = found.id;

    return this.service.save(vehicle);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Vehicle not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('File not found', HttpStatus.BAD_REQUEST);
    }

    const result = await this.supabaseService.upload(file);

    if (!result) {
      throw new HttpException(
        'Unable to upload file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return result;
  }
}

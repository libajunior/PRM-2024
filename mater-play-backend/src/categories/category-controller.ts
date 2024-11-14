import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Category } from 'src/categories/category-entity';
import { CategoryService } from 'src/categories/category-service';

@Controller('categories')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return found;
  }

  @Post()
  create(@Body() category: Category): Promise<Category> {
    return this.service.save(category);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() category: Category,
  ): Promise<Category> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    category.id = found.id;

    return this.service.save(category);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return this.service.remove(id);
  }
}

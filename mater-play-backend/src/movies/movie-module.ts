import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie-entity';
import { MovieService } from './movie-service';
import { MovieController } from './movie-controller';
import { Category } from 'src/categories/category-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Movie])],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}

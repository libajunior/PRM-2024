import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie-entity';
import { MovieService } from './movie-service';
import { MovieController } from './movie-controller';
import { Category } from 'src/categories/category-entity';
import { Genre } from 'src/genres/genre-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Genre, Movie])],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}

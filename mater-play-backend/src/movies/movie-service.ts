import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category-entity';
import { Movie } from 'src/movies/movie-entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private repository: Repository<Movie>,
  ) {}

  findAll(): Promise<Movie[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Movie> {
    return this.repository.findOneBy({ id: id });
  }

  findByCategory(category: Category): Promise<Movie[]> {
    return this.repository.find({
      where: {
        categories: {
          id: category.id,
        },
      },
    });
  }

  save(movie: Movie): Promise<Movie> {
    return this.repository.save(movie);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

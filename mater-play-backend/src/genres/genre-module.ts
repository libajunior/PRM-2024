import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './genre-entity';
import { GenreService } from './genre-service';
import { GenreController } from './genre-controller';

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [GenreService],
  controllers: [GenreController],
})
export class GenreModule {}

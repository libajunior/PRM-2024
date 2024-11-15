export interface IGenre {
  id?: number;
  name: string;
}
export interface ICategory {
  id?: number;
  name: string;
  active: boolean;
}
export interface IMovie {
  id?: string;
  title: string;
  description: string;
  poster: string;
  ageRating: string;
  categories: ICategory[];
  genres: IGenre[];
}
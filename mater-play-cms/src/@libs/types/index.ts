export interface IAgeRating {
  id?: number;
  name: string;
  description: string;
}

export interface IGenre {
  id?: string;
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
  ageRating: IAgeRating;
  categories?: ICategory[];
  genres?: IGenre[];
}
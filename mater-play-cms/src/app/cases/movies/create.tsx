import { useState } from "react";
import { IMovie } from "../../../@libs/types";
import { MovieForm } from "./form";

export function MovieCreate() {
  const [movie, setMovie] = useState<IMovie>({
    title: '',
    description: '',
    poster: '',
    ageRating: '',
  });

  return (
    <MovieForm movie={movie} setMovie={setMovie}  showForm={true} />    
  )
}
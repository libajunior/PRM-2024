import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../../@libs/types";
import { MovieService } from "../../../services/movie.service";
import { MovieForm } from "./form";

export function MovieEdit() {
  const params = useParams();

  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    
    if (params?.id) {
      MovieService.getById(params.id)
        .then(result => {
          setMovie(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <MovieForm movie={movie} setMovie={setMovie} showForm={true} />
    </>
    
  )
}
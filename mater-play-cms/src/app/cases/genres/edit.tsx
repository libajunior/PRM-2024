import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IGenre } from "../../../@libs/types";
import { GenreService } from "../../../services/genre.service";
import { GenreForm } from "./form";

export function GenreEdit() {
  const params = useParams();

  const [genre, setGenre] = useState<IGenre>({} as IGenre);

  useEffect(() => {
    
    if (params?.id) {
      GenreService.getById(params.id)
        .then(result => {
          setGenre(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <GenreForm genre={genre} setGenre={setGenre} showForm={true} />
    </>
    
  )
}
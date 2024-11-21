import { useState } from "react";
import { IGenre } from "../../../@libs/types";
import { GenreForm } from "./form";

export function GenreCreate() {
  const [genre, setGenre] = useState<IGenre>({
    name: ''
  });

  return (
    <GenreForm genre={genre} setGenre={setGenre}  showForm={true} />    
  )
}
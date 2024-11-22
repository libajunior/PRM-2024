import { Paper } from "@mui/material";
import { IMovie } from "../../@libs/types";

type MovieCardProps = {
  movie: IMovie
}
function MovieCard({
  movie
}: MovieCardProps) {
  return (
    <Paper
      component="a"
      elevation={0}
      href={movie.id}
    >
      <img src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/${movie.poster}`}
        style={{
          width: '180px'
        }}
      />
    </Paper>
  )
}

export default MovieCard;
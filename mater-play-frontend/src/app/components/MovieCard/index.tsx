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
      sx={{
        minWidth: '10rem'
      }}
    >
      <img src={`assets/${movie.poster}`}
        style={{
          width: '100%'
        }}
      />
    </Paper>
  )
}

export default MovieCard;
import { Paper } from "@mui/material";

type MovieCardProps = {
  poster?: string;
}
function MovieCard({
  poster
}: MovieCardProps) {
  return (
    <Paper
      component="a"
      elevation={0}
      href="/1"
      sx={{
        minWidth: '10rem'
      }}
    >
      <img src={ poster }
        style={{
          width: '100%'
        }}
      />
    </Paper>
  )
}

export default MovieCard;
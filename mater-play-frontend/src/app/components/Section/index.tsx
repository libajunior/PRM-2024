import {Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";
import { useEffect, useState } from "react";
import { IMovie } from "../../@libs/types";
import { MovieService } from "../../services/movie-service";

type SectionProps = {
  title: string;
}
function Section({
  title
}: SectionProps) {
  
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    
    MovieService.getMovies()
      .then(result => {
        setMovies(result)
      });

  }, []);
  
  return (
    <Box>
      <Container>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            paddingTop: '2rem'
          }}
        >
          { title }
        </Typography>
        <Stack
          direction="row"
          gap={0.5}
          sx={{
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            paddingY: '1rem'
          }}
        >
          {movies.map(item => (
            <MovieCard key={item.id} poster={'assets/'+ item.poster} />
          ))}

        </Stack>
      </Container>
    </Box>
  )
}

export default Section;
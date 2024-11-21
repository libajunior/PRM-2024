import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICategory, IGenre, IMovie } from "../../../@libs/types";
import { CategoryService } from "../../../services/category.service";
import { GenreService } from "../../../services/genre.service";
import { MovieService } from "../../../services/movie.service";
import { MultiSelect } from '../../components/ui/multi-select';
import SideForm from "../../components/ui/side-form";
import { toast } from "react-toastify";

type MovieFormProps = {
  movie: IMovie;
  setMovie: (movie: IMovie) => void;
  showForm: boolean;
}
export function MovieForm({
  movie,
  setMovie,
  showForm
}: MovieFormProps) {

  const navigate = useNavigate();

  //State - Loading
  const [loading, setLoading] = useState(false)

  const [genres, setGenres] = useState<IGenre[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const handleDelete = () => {
    setLoading(true)

    if (movie.id) {
      MovieService.remove(movie.id)
        .then(() => {
          navigate('/movies');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }
  const handleSave = () => {
    setLoading(true);

    if (movie.id) {
      MovieService.update(movie.id, movie)
        .then(() => {
          navigate('/movies');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    } else {
      MovieService.create(movie)
        .then(() => {
          navigate('/movies');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }

  useEffect(() => {
    GenreService.getAll()
      .then(result => {
        setGenres(result.data)
      })

    CategoryService.getAll()
      .then(result => {
        setCategories(result.data)
      })
  }, [])
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Filmes"
      onSave={handleSave}
      {...(movie.id && { onDelete: handleDelete })}
      loading={loading}
    >
      <TextField
        label="Título do Filme"
        variant="outlined"
        size="small"
        value={movie.title || ''}
        onChange={(event) => setMovie({ ...movie, title: event.target.value })}
        fullWidth
        required
        autoFocus
      />
      <TextField
        label="Sinopse"
        variant="outlined"
        size="small"
        value={movie.description || ''}
        onChange={(event) => setMovie({ ...movie, description: event.target.value })}
        fullWidth
        required
        multiline
        rows={6}
      />

      <MultiSelect
        selected={movie.genres || []}
        onChange={(genres) => setMovie({ ...movie, genres })}
        items={genres}
        label="Gêneros"
      />

      <MultiSelect
        selected={movie.categories || []}
        onChange={(categories) => setMovie({ ...movie, categories })}
        items={categories}
        label="Categorias"
      />
      <Stack
        direction="row"
      >
        <FormControl
          size="small"
          fullWidth
        >
          <InputLabel>Classificação</InputLabel>
          <Select
            label="Classificação Etária"
            value={movie.ageRating || ''}
            onChange={(event) => setMovie({ ...movie, ageRating: event.target.value })}            
          >
            <MenuItem value="L">Livre para todas as idades</MenuItem>
            <MenuItem value="10">Não recomendado para menores de 10 anos</MenuItem>
            <MenuItem value="12">Não recomendado para menores de 12 anos</MenuItem>
            <MenuItem value="14">Não recomendado para menores de 14 anos</MenuItem>
            <MenuItem value="16">Não recomendado para menores de 16 anos</MenuItem>
            <MenuItem value="18">Não recomendado para menores de 18 anos</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <TextField
        label="Poster"
        variant="outlined"
        size="small"
        value={movie.poster || ''}
        onChange={(event) => setMovie({ ...movie, poster: event.target.value })}
        fullWidth
        required
      />
    </SideForm>
  )
}
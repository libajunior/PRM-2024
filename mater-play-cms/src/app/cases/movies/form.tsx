import BackupOutlined from '@mui/icons-material/BackupOutlined';
import { Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICategory, IGenre, IMovie } from "../../../@libs/types";
import { CategoryService } from "../../../services/category.service";
import { GenreService } from "../../../services/genre.service";
import { MovieService } from "../../../services/movie.service";
import SideForm from "../../components/ui/side-form";
import { MultiSelect } from '../../components/ui/multi-select';

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
    if (movie.id) {
      MovieService.remove(movie.id)
        .then(() => {
          navigate('/movies');
        })
    }
  }
  const handleSave = () => {
    if (movie.id) {
      MovieService.update(movie.id, movie)
        .then(() => {
          navigate('/movies');
        })
    } else {
      MovieService.create(movie)
        .then(() => {
          navigate('/movies');
        })
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
      <TextField
        label="Poster"
        variant="outlined"
        size="small"
        value={movie.poster || ''}
        onChange={(event) => setMovie({ ...movie, poster: event.target.value })}
        fullWidth
        required
        autoFocus
      />
    </SideForm>
  )
}
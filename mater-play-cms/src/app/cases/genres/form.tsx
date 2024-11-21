import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { IGenre } from "../../../@libs/types";
import { GenreService } from "../../../services/genre.service";
import SideForm from "../../components/ui/side-form";


type GenreFormProps = {
  genre: IGenre;
  setGenre: (genre: IGenre) => void;
  showForm: boolean;
}
export function GenreForm({
  genre, 
  setGenre,
  showForm
}: GenreFormProps) {

  const navigate = useNavigate();

  const handleDelete = () => {
    if (genre.id) {
      GenreService.remove(genre.id)
        .then(() => {
          navigate('/genres');
        })
    }
  }
  const handleSave = () => {
    if (genre.id) {
      GenreService.update(genre.id, genre)
        .then(() => {
          navigate('/genres');
        })
    } else {
      GenreService.create(genre)
        .then(() => {
          navigate('/genres');
        })
    }
  }

  return (
    <SideForm 
      open={showForm}
      title="Cadastro de Gêneros"
      onSave={handleSave}
      {...(genre.id && { onDelete: handleDelete })}
    >
      <TextField
        label="Nome do Gênero"
        variant="outlined"
        size="small"
        value={genre.name || ''}
        onChange={(event) => setGenre({ ...genre, name: event.target.value })}
        fullWidth
        required
        autoFocus
      />
    </SideForm>
  )
}
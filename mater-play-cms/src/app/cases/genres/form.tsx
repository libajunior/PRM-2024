import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { IGenre } from "../../../@libs/types";
import { GenreService } from "../../../services/genre.service";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { toast } from "react-toastify";

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

  //State - Loading
  const [loading, setLoading] = useState(false)

  const handleDelete = () => {
    setLoading(true)

    if (genre.id) {
      GenreService.remove(genre.id)
        .then(() => {
          navigate('/genres');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }
  const handleSave = () => {
    setLoading(true)
    
    if (genre.id) {
      GenreService.update(genre.id, genre)
        .then(() => {
          navigate('/genres');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    } else {
      GenreService.create(genre)
        .then(() => {
          navigate('/genres');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }

  return (
    <SideForm 
      open={showForm}
      title="Cadastro de Gêneros"
      onSave={handleSave}
      {...(genre.id && { onDelete: handleDelete })}
      loading={loading}
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
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { ICategory } from "../../../@libs/types";
import { CategoryService } from "../../../services/category.service";
import SideForm from "../../components/ui/side-form";


type CategoryFormProps = {
  category: ICategory;
  setCategory: (category: ICategory) => void;
  showForm: boolean;
}
export function CategoryForm({
  category, 
  setCategory,
  showForm
}: CategoryFormProps) {

  const navigate = useNavigate();

  const handleDelete = () => {
    if (category.id) {
      CategoryService.remove(category.id)
        .then(() => {
          navigate('/categories');
        })
    }
  }
  const handleSave = () => {
    if (category.id) {
      CategoryService.update(category.id, category)
        .then(() => {
          navigate('/categories');
        })
    } else {
      CategoryService.create(category)
        .then(() => {
          navigate('/categories');
        })
    }
  }

  return (
    <SideForm 
      open={showForm}
      title="Cadastro de Categoria"
      onSave={handleSave}
      {...(category.id && { onDelete: handleDelete })}
    >
      <TextField
        label="Nome Categoria"
        variant="outlined"
        size="small"
        value={category.name || ''}
        onChange={(event) => setCategory({ ...category, name: event.target.value })}
        fullWidth
        required
        autoFocus
      />
    </SideForm>
  )
}
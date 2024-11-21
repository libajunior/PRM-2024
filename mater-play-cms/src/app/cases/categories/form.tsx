import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { ICategory } from "../../../@libs/types";
import { CategoryService } from "../../../services/category.service";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { toast } from "react-toastify";

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

  //State - Loading
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true)
    
    if (category.id) {
      CategoryService.remove(category.id)
        .then(() => {
          navigate('/categories');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }
  const handleSave = () => {
    setLoading(true)
    
    if (category.id) {
      CategoryService.update(category.id, category)
        .then(() => {
          navigate('/categories');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    } else {
      CategoryService.create(category)
        .then(() => {
          navigate('/categories');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }

  return (
    <SideForm 
      open={showForm}
      title="Cadastro de Categoria"
      onSave={handleSave}
      {...(category.id && { onDelete: handleDelete })}
      loading={loading}
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
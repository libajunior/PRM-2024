import { Outlet, useNavigate } from "react-router-dom"
import { Box, Button, Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import BreadCrumb from "../../components/ui/bread-crumb"
import { CategoryDataGrid } from "./datagrid";

function CategoryLayout() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/categories/new')
  }

  return (
    <>
    <Stack className="page-container">
        <BreadCrumb title="Cadastro de Categorias" />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'end',
            marginBottom: '1rem'
          }}
        >
          <Button 
            variant="contained"
            onClick={handleCreate}
          >
            <AddIcon />
            Adicionar
          </Button>
        </Box>

        <CategoryDataGrid />
        
        <Outlet />
      </Stack>
    </>
  )
}

export default CategoryLayout
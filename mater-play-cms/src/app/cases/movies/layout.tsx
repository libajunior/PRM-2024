import { Outlet, useNavigate } from "react-router-dom"
import { Box, Button, Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import BreadCrumb from "../../components/ui/bread-crumb"
import { MovieDataGrid } from "./datagrid";

function MovieLayout() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/movies/new')
  }

  return (
    <>
    <Stack className="page-container">
        <BreadCrumb title="Cadastro de Filmes" />
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

        <MovieDataGrid />
        
        <Outlet />
      </Stack>
    </>
  )
}

export default MovieLayout
import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import BreadCrumb from "../../components/ui/bread-crumb";
import { Outlet, useNavigate } from "react-router-dom";
import VehicleTypeDataGrid from "./datagrid";

function VehicleTypeLayout() {
  
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/vehicle-types/new', { replace: true })
  }

  return (
    <Stack
      className="page-container"
    >
      <BreadCrumb title="Cadastro de Tipo de Veículos" />
      <Box
        display="flex"
        width="100%"
        justifyContent="end"
        marginBottom="1rem"
      >
        <Button
          variant="contained"
          onClick={handleCreate}
        >
          <AddIcon />
          Adicionar
        </Button>
      </Box>

      <VehicleTypeDataGrid />

      <Outlet />
    </Stack>
  )
}

export default VehicleTypeLayout;
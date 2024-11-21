import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import BreadCrumb from "../../components/ui/bread-crumb";
import { Outlet, useNavigate } from "react-router-dom";
import VehicleDataGrid from "./datagrid";

function VehicleLayout() {
  
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/vehicles/new', { replace: true })
  }

  return (
    <Stack
      className="page-container"
    >
      <BreadCrumb title="Cadastro de Veículos" />
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

      <VehicleDataGrid />

      <Outlet />
    </Stack>
  )
}

export default VehicleLayout;
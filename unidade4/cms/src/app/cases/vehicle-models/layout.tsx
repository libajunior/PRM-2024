import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import BreadCrumb from "../../components/ui/bread-crumb";
import { Outlet, useNavigate } from "react-router-dom";
import VehicleModelDataGrid from "./datagrid";

function VehicleModelLayout() {
  
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/vehicle-models/new', { replace: true })
  }

  return (
    <Stack
      className="page-container"
    >
      <BreadCrumb title="Cadastro de Modelos" />
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

      <VehicleModelDataGrid />

      <Outlet />
    </Stack>
  )
}

export default VehicleModelLayout;
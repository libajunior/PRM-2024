import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IVehicleFactory } from "../../../@libs/types";
import { VehicleFactoryService } from "../../../services/vehicle-factory.service";
import ActionMenu from "../../components/ui/action-menu";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

//Definições das Colunas
const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Código Identificação',
    resizable: false,
    width: 350
  },
  {
    field: 'name',
    headerName: 'Nome da Montadora',
    resizable: false,
    flex: 1
  },
  {
    field: 'action',
    headerName: '',
    resizable: false,
    sortable: false,
    disableColumnMenu: true,
    align: 'right',
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <ActionMenu 
        itemId={ params.row.id }
      />
    )
  }
];

function VehicleFactoryDataGrid() {
  const location = useLocation();

  const [vehicleFactories, setVehicleFactories] = useState<IVehicleFactory[]>([]);

  useEffect(()=> {
      VehicleFactoryService.getAll()
        .then(result => {
          setVehicleFactories(result.data)
        })
        .catch(error => toast.error(String(error)))
  }, [location])

  return (
    <Paper
      sx={{
        height: '90%',
        width: '100%'
      }}
    >

      <DataGrid
        rows={vehicleFactories}
        columns={columns}
        sx={{
          '& .MuiDataGrid-columnSeparator': {
            display: 'none'
          }
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />

    </Paper>
  )
}

export default VehicleFactoryDataGrid;
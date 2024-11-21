import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IVehicleType } from "../../../@libs/types";
import { VehicleTypeService } from "../../../services/vehicle-type.service";
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
    headerName: 'Tipo do Veículo',
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

function VehicleTypeDataGrid() {
  const location = useLocation();

  const [vehicleTypes, setVehicleTypes] = useState<IVehicleType[]>([]);

  useEffect(()=> {
      VehicleTypeService.getAll()
        .then(result => {
          setVehicleTypes(result.data)
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
        rows={vehicleTypes}
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

export default VehicleTypeDataGrid;
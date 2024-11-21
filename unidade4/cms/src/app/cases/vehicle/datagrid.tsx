import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IVehicle } from "../../../@libs/types";
import { VehicleService } from "../../../services/vehicle.service";
import ActionMenu from "../../components/ui/action-menu";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { FormattedNumber, IntlProvider } from "react-intl";

//Definições das Colunas
const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Código Identificação',
    resizable: false,
    width: 350
  },
  {
    field: 'type',
    headerName: 'Tipo Veículo',
    resizable: false,
    width: 160,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.type.name}</>
    )
  },
  {
    field: 'model',
    headerName: 'Modelo',
    resizable: false,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.model.name}</>
    )
  },
  {
    field: 'year',
    headerName: 'Ano',
    resizable: false,
    width: 120,
    renderCell: (params: GridRenderCellParams) => (
      <>{`${params.row.yearFactory}/${params.row.yearModel}`}</>
    )
  },
  {
    field: 'price',
    headerName: 'Preço Diário',
    resizable: false,
    width: 120,
    renderCell: (params: GridRenderCellParams) => (
      <IntlProvider locale="pt-BR">
        <FormattedNumber 
          value={params.row.priceRent} 
          style="currency"
          currency="BRL"
        />
      </IntlProvider>
    )
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

function VehicleDataGrid() {
  const location = useLocation();

  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(()=> {
      VehicleService.getAll()
        .then(result => {
          setVehicles(result.data)
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
        rows={vehicles}
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

export default VehicleDataGrid;
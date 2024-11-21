import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Paper } from "@mui/material";
import { ptBR } from '@mui/x-data-grid/locales';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import { IGenre } from "../../../@libs/types";
import { GenreService } from "../../../services/genre.service";

import ActionsMenu from "../../components/ui/action-menu";

//Definições das colunas
const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: '#', 
    resizable: false, 
    width: 320 
  },
  { 
    field: 'name', 
    headerName: 'Nome do Gênero', 
    resizable: false, 
    flex: 1 
  },
  {
    field: 'actions',
    headerName: '', 
    resizable: false,    
    sortable: false,
    disableColumnMenu: true,
    align: 'right',
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <ActionsMenu
        itemId={params.row.id}
      />
    ),
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export function GenreDataGrid() {
  const location = useLocation();

  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    GenreService.getAll()
      .then(result => {
        setGenres(result.data)
      })
      .catch(error => toast.error(String(error)))
  }, [location]);

  return (
    <Paper
      sx={{ 
        height: '90%', 
        width: '100%' 
      }}
    >
      <DataGrid
        rows={genres}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </Paper>
  )
}
import FilterIcon from '@mui/icons-material/FilterAltOutlined';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from "dayjs";
import 'dayjs/locale/pt-br';
import { useEffect, useState } from "react";
import { IFilter, IVehicleFactory } from "../../../@libs/types";
import { VehicleFactoryService } from "../../../services/vehicle-factory.service";

export function FilterBar() {
  const [filter, setFilter] = useState<IFilter>({
    factory: { id: '', name: '' },
    startDate: dayjs(),
    endDate: dayjs().add(2, 'day')
  });

  const [vehiclesFactories, setVehiclesFactories] = useState<IVehicleFactory[]>([]);

  useEffect(() => {
    VehicleFactoryService.getAll()
      .then(result => {
        setVehiclesFactories(result.data)
      });
  }, []);

  const handleChangeFactory = (event: SelectChangeEvent) => {
    const { value } = event.target;
    const seleted = vehiclesFactories.find(item => item.id === value)

    setFilter({ ...filter, factory: seleted! })
  }

  const handleChangeStartDate = (date: Dayjs | null) => {
    if (date) {
      setFilter({ ...filter, startDate: date });
    }
  };

  const handleChangeEndDate = (date: Dayjs | null) => {
    if (date) {
      setFilter({ ...filter, endDate: date });
    }
  };


  return (
    <Stack
      gap={2}
      padding="1rem"
      sx={{
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: '0.5rem'
      }}
    >
      <Typography>
        Informe a montadora e o período que deseja locar o veículo
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <FormControl
          size="small"
          sx={{
            paddingTop: '0.5rem',
            width: '320px'
          }}
        >
          <InputLabel id="select-factory">Montadora</InputLabel>
          <Select
            labelId="select-factory"
            label="Montadora"
            value={filter.factory?.id || ''}
            onChange={handleChangeFactory}
          >
            {vehiclesFactories.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <LocalizationProvider 
          dateAdapter={AdapterDayjs}
          adapterLocale="pt-br"
        >
          <DemoContainer components={['DatePicker','DatePicker']}>
          <DatePicker
              label="Data Incial"
              value={filter.startDate}
              onChange={handleChangeStartDate}
              slotProps={{ 
                textField: { 
                  size: 'small' 
                } 
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider 
          dateAdapter={AdapterDayjs}
          adapterLocale="pt-br"
        >
          <DemoContainer components={['DatePicker']}>
          
            <DatePicker
              size="small"
              label="Data Final"
              value={filter.endDate}
              onChange={handleChangeEndDate}
              slotProps={{ 
                textField: { 
                  size: 'small' 
                } 
              }}
            />
          </DemoContainer>
        </LocalizationProvider>

        <Button
          variant="contained"
        >
          <FilterIcon />
          Aplicar Filtro
        </Button>
      </Stack>
    </Stack>
  )
}
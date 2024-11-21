import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import { IVehicle, IVehicleModel, IVehicleType } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { ChangeEvent, useEffect, useState } from "react";
import { VehicleService } from "../../../services/vehicle.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { VehicleTypeService } from "../../../services/vehicle-type.service";
import { VehicleModelService } from "../../../services/vehicle-model.service";
import { LoadingButton } from "@mui/lab";

type VehicleFormProps = {
  vehicle: IVehicle;
  setVehicle: (vehicle: IVehicle) => void;
  showForm: boolean;
}
function VehicleForm({
  vehicle,
  setVehicle,
  showForm
}: VehicleFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [vehicleTypes, setVehiclesTypes] = useState<IVehicleType[]>([]);
  const [vehicleModels, setVehiclesModels] = useState<IVehicleModel[]>([]);

  useEffect(()=>{
    VehicleTypeService.getAll()
      .then(result => {
        setVehiclesTypes(result.data)
      });

    VehicleModelService.getAll()
      .then(result => {
        setVehiclesModels(result.data)
      })      
  },[]);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (vehicle.id) 
      ? VehicleService.update(vehicle.id, vehicle) 
      : VehicleService.create(vehicle);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/vehicles');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
  }
  const handleDelete = () => {
    setLoading(true);

    if (vehicle.id) {
      VehicleService.remove(vehicle.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/vehicles');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }

  const handleChangeType = (event: SelectChangeEvent) => {
    const {value} = event.target;
    const seleted = vehicleTypes.find(item => item.id === value)
    
    setVehicle({...vehicle, type: seleted!})
  }

  const handleChangeModel = (event: SelectChangeEvent) => {
    const {value} = event.target;
    const seleted = vehicleModels.find(item => item.id === value)
    
    setVehicle({...vehicle, model: seleted!})
  }

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target;

    setLoading(true);

    if (files && files[0]) {
      const file = files[0];

      VehicleService.upload(file)
        .then(result => {
          if (result.data) {
            const { fullPath } = result.data;
            setVehicle({ ...vehicle, photo: fullPath })
          }
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Veículos"
      loading={loading}
      onSave={handleSave}
      {...(vehicle.id && {onDelete: handleDelete})}
    >
      <FormControl
       fullWidth
       size="small"
      >
        <InputLabel id="select-type">Tipo Veículo</InputLabel>
        <Select
          labelId="select-type"
          label="Tipo Veículo"
          value={vehicle.type.id || ''}
          onChange={handleChangeType}
        >
          {vehicleTypes.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
       fullWidth
       size="small"
      >
        <InputLabel id="select-model">Modelo Veículo</InputLabel>
        <Select
          labelId="select-model"
          label="Modelo Veículo"
          value={vehicle.model.id || ''}
          onChange={handleChangeModel}
        >
          {vehicleModels.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <Stack
        direction="row"
        gap={1}
      >
        <TextField 
          required
          label="Ano Fabrição"
          variant="outlined"
          size="small"
          value={vehicle.yearFactory}
          onChange={event => setVehicle({...vehicle, yearFactory: Number(event.target.value)})}
        />
        <TextField
          required
          label="Ano Modelo"
          variant="outlined"
          size="small"
          value={vehicle.yearModel}
          onChange={event => setVehicle({...vehicle, yearModel: Number(event.target.value)})}
        />
        <TextField 
          fullWidth
          required
          label="Preço Diário"
          variant="outlined"
          size="small"
          value={vehicle.priceRent}
          onChange={event => setVehicle({...vehicle, priceRent: Number(event.target.value)})}
        />
      </Stack>
      <TextField       
        fullWidth
        required
        multiline
        rows={4}
        label="Descrição"
        variant="outlined"
        size="small"
        value={vehicle.description}
        onChange={event => setVehicle({...vehicle, description: event.target.value})}
      />
      
      <fieldset className="form-fieldset">
        <legend>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(0,0,0,0,6)'
            }}
          >
            Foto do Veículo
          </Typography>
        </legend>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
          gap="1rem"
        >
          {vehicle.photo && (
            <img 
              alt={vehicle.model.name} 
              src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/${vehicle.photo}`} 
              style={{
                width: '320px'
              }}
            />
          )}
          <LoadingButton
            variant="outlined"
            component="label"
            loading={loading}
          >
            <BackupOutlinedIcon 
              sx={{
                marginRight: '1rem'
              }} 
            />
            Escolher Imagem
            <input type="file" hidden onChange={handleChangeFile} />
          </LoadingButton>
        </Stack>
      </fieldset>
    </SideForm>
  )
}

export default VehicleForm;
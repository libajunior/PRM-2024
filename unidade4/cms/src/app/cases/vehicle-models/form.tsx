import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { IVehicleFactory, IVehicleModel } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useEffect, useState } from "react";
import { VehicleModelService } from "../../../services/vehicle-model.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { VehicleFactoryService } from "../../../services/vehicle-factory.service";

type VehicleModelFormProps = {
  vehicleModel: IVehicleModel;
  setVehicleModel: (vehicleModel: IVehicleModel) => void;
  showForm: boolean;
}
function VehicleModelForm({
  vehicleModel,
  setVehicleModel,
  showForm
}: VehicleModelFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [factories, setFactories] = useState<IVehicleFactory[]>([]);

  useEffect(() => {
    VehicleFactoryService.getAll()
      .then(result => {
        setFactories(result.data)
      })
      .catch(error => toast.error(String(error)))
  }, [])

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (vehicleModel.id) 
      ? VehicleModelService.update(vehicleModel.id, vehicleModel) 
      : VehicleModelService.create(vehicleModel);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/vehicle-models');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
  }
  const handleDelete = () => {
    setLoading(true);

    if (vehicleModel.id) {
      VehicleModelService.remove(vehicleModel.id)
        .then(() => {
          toast.success('Registro excluído com sucesso!');
          navigate('/vehicle-models');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;

    const selected = factories.find(item => item.id === value)
    setVehicleModel({...vehicleModel, factory: selected!})
  }

  return (
    <SideForm
      open={showForm}
      title="Cadastro de Modelos"
      loading={loading}
      onSave={handleSave}
      {...(vehicleModel.id && {onDelete: handleDelete})}
    >
      <FormControl 
        fullWidth 
        size="small" 
        margin="normal" 
        required
      >
      <InputLabel>Montadora</InputLabel>
      <Select
        value={vehicleModel.factory?.id || ''}
        onChange={handleChange}
        label="Montadora"
      >
        {factories.map((factory) => (
          <MenuItem key={factory.id} value={factory.id}>
            {factory.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

      <TextField 
        fullWidth
        required
        label="Nome Modelo"
        variant="outlined"
        size="small"
        value={vehicleModel.name}
        onChange={event => setVehicleModel({...vehicleModel, name: event.target.value})}
      />
    </SideForm>
  )
}

export default VehicleModelForm;
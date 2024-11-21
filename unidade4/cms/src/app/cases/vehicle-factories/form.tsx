import { TextField } from "@mui/material";
import { IVehicleFactory } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { VehicleFactoryService } from "../../../services/vehicle-factory.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type VehicleFactoryFormProps = {
  vehicleFactory: IVehicleFactory;
  setVehicleFactory: (vehicleFactory: IVehicleFactory) => void;
  showForm: boolean;
}
function VehicleFactoryForm({
  vehicleFactory,
  setVehicleFactory,
  showForm
}: VehicleFactoryFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (vehicleFactory.id) ? 
        VehicleFactoryService.update(vehicleFactory.id, vehicleFactory) :  
            VehicleFactoryService.create(vehicleFactory);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/vehicle-factories');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
  }
  const handleDelete = () => {
    setLoading(true);

    if (vehicleFactory.id) {
      VehicleFactoryService.remove(vehicleFactory.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/vehicle-factories');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Montadora"
      loading={loading}
      onSave={handleSave}
      {...(vehicleFactory.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Nome Montadora"
        variant="outlined"
        size="small"
        value={vehicleFactory.name}
        onChange={event => setVehicleFactory({...vehicleFactory, name: event.target.value})}
      />
    </SideForm>
  )
}

export default VehicleFactoryForm;
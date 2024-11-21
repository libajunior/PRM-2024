import { TextField } from "@mui/material";
import { IVehicleType } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { VehicleTypeService } from "../../../services/vehicle-type.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type VehicleTypeFormProps = {
  vehicleType: IVehicleType;
  setVehicleType: (vehicleType: IVehicleType) => void;
  showForm: boolean;
}
function VehicleTypeForm({
  vehicleType,
  setVehicleType,
  showForm
}: VehicleTypeFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (vehicleType.id) ? 
        VehicleTypeService.update(vehicleType.id, vehicleType) :  
            VehicleTypeService.create(vehicleType);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/vehicle-types');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

    // if (vehicleType.id) {
    //   VehicleTypeService.update(vehicleType.id, vehicleType)
    //     .then(() => {
    //       toast.success('Registro atualizado com sucesso!');
    //       navigate('/vehicle-types');
    //     })
    //     .catch(error => toast.error(String(error)))
    //     .finally(() => setLoading(false))
    // } else {
    //   VehicleTypeService.create(vehicleType)
    //     .then(() => {
    //       toast.success('Registro incluído com sucesso!');
    //       navigate('/vehicle-types');
    //     })
    //     .catch(error => toast.error(String(error)))
    //     .finally(() => setLoading(false))
    // }
  }
  const handleDelete = () => {
    setLoading(true);

    if (vehicleType.id) {
      VehicleTypeService.remove(vehicleType.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/vehicle-types');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Tipo de Veículo"
      loading={loading}
      onSave={handleSave}
      {...(vehicleType.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Tipo do Veículo"
        variant="outlined"
        size="small"
        value={vehicleType.name}
        onChange={event => setVehicleType({...vehicleType, name: event.target.value})}
      />
    </SideForm>
  )
}

export default VehicleTypeForm;
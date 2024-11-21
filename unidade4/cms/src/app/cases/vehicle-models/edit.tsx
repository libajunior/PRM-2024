import { useEffect, useState } from "react";
import VehicleModelForm from "./form";
import { IVehicleModel } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { VehicleModelService } from "../../../services/vehicle-model.service";
import { toast } from "react-toastify";

function VehicleModelEditPage() {
  const params = useParams();

  const [vehicleModel, setVehicleModel] = useState<IVehicleModel>({
    name: '',
    factory: {}
  } as IVehicleModel);

  useEffect(() => {

    if (params?.id) {
      VehicleModelService.getById(params.id)
        .then(result => {
          setVehicleModel(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <VehicleModelForm 
      vehicleModel={vehicleModel}
      setVehicleModel={setVehicleModel}
      showForm={true}
    />
  )
}

export default VehicleModelEditPage;
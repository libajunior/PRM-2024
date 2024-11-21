import { useEffect, useState } from "react";
import VehicleTypeForm from "./form";
import { IVehicleType } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { VehicleTypeService } from "../../../services/vehicle-type.service";
import { toast } from "react-toastify";

function VehicleTypeEditPage() {
  const params = useParams();

  const [vehicleType, setVehicleType] = useState<IVehicleType>({
    name: ''
  } as IVehicleType);

  useEffect(() => {

    if (params?.id) {
      VehicleTypeService.getById(params.id)
        .then(result => {
          setVehicleType(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <VehicleTypeForm 
      vehicleType={vehicleType}
      setVehicleType={setVehicleType}
      showForm={true}
    />
  )
}

export default VehicleTypeEditPage;
import { useEffect, useState } from "react";
import VehicleFactoryForm from "./form";
import { IVehicleFactory } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { VehicleFactoryService } from "../../../services/vehicle-factory.service";
import { toast } from "react-toastify";

function VehicleFactoryEditPage() {
  const params = useParams();

  const [vehicleFactory, setVehicleFactory] = useState<IVehicleFactory>({
    name: ''
  } as IVehicleFactory);

  useEffect(() => {

    if (params?.id) {
      VehicleFactoryService.getById(params.id)
        .then(result => {
          setVehicleFactory(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <VehicleFactoryForm 
      vehicleFactory={vehicleFactory}
      setVehicleFactory={setVehicleFactory}
      showForm={true}
    />
  )
}

export default VehicleFactoryEditPage;
import { useEffect, useState } from "react";
import VehicleForm from "./form";
import { IVehicle } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { VehicleService } from "../../../services/vehicle.service";
import { toast } from "react-toastify";

function VehicleEditPage() {
  const params = useParams();

  const [vehicle, setVehicle] = useState<IVehicle>({
    description: '',
    photo: '',
    yearFactory: 2024,
    yearModel: 2024,
    priceRent: 0,
    type: {},
    model: {},
  } as IVehicle);

  useEffect(() => {

    if (params?.id) {
      VehicleService.getById(params.id)
        .then(result => {
          setVehicle(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <VehicleForm 
      vehicle={vehicle}
      setVehicle={setVehicle}
      showForm={true}
    />
  )
}

export default VehicleEditPage;
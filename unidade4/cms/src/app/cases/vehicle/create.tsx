import { useState } from "react";
import { IVehicle } from "../../../@libs/types";
import VehicleForm from "./form";

function VehicleCreatePage() {

  const [vehicle, setVehicle] = useState<IVehicle>({
    description: '',
    photo: '',
    yearFactory: 2024,
    yearModel: 2024,
    priceRent: 0,
    type: {},
    model: {},
  } as IVehicle);

  return (
    <VehicleForm 
      vehicle={vehicle}
      setVehicle={setVehicle}
      showForm={true}
    />
  )
}

export default VehicleCreatePage;
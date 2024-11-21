import { useState } from "react";
import { IVehicleType } from "../../../@libs/types";
import VehicleTypeForm from "./form";

function VehicleTypeCreatePage() {

  const [vehicleType, setVehicleType] = useState<IVehicleType>({
    name: ''
  } as IVehicleType);

  return (
    <VehicleTypeForm 
      vehicleType={vehicleType}
      setVehicleType={setVehicleType}
      showForm={true}
    />
  )
}

export default VehicleTypeCreatePage;
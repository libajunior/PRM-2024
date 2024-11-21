import { useState } from "react";
import { IVehicleFactory } from "../../../@libs/types";
import VehicleFactoryForm from "./form";

function VehicleFactoryCreatePage() {

  const [vehicleFactory, setVehicleFactory] = useState<IVehicleFactory>({
    name: ''
  } as IVehicleFactory);

  return (
    <VehicleFactoryForm 
      vehicleFactory={vehicleFactory}
      setVehicleFactory={setVehicleFactory}
      showForm={true}
    />
  )
}

export default VehicleFactoryCreatePage;
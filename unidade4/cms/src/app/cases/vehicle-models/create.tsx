import { useState } from "react";
import { IVehicleModel } from "../../../@libs/types";
import VehicleModelForm from "./form";

function VehicleModelCreatePage() {

  const [vehicleModel, setVehicleModel] = useState<IVehicleModel>({
    name: '',
    factory: {}
  } as IVehicleModel);

  return (
    <VehicleModelForm 
      vehicleModel={vehicleModel}
      setVehicleModel={setVehicleModel}
      showForm={true}
    />
  )
}

export default VehicleModelCreatePage;
import { createContext, ReactNode, useEffect, useState } from "react";
import { IVehicle } from "../@libs/types";
import { VehicleService } from "../services/vehicle.service";

interface VehiclesContextProps {
  vehicles: IVehicle[];
  setVehicles: React.Dispatch<React.SetStateAction<IVehicle[]>>;
}

// Cria o contexto com valores iniciais
export const VehiclesContext = createContext<VehiclesContextProps | undefined>(undefined);

// Cria o provider
interface VehiclesProviderProps {
  children: ReactNode;
}

export const VehiclesProvider: React.FC<VehiclesProviderProps> = ({ children }) => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(()=>{
    VehicleService.getAll()
      .then(result => {
        console.log(result.data)
        setVehicles(result.data);
      })
  },[])

  return (
    <VehiclesContext.Provider value={{ vehicles, setVehicles }}>
      {children}
    </VehiclesContext.Provider>
  );
};
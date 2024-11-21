import { useContext } from "react";
import { VehiclesContext } from "../contexts/VehicleContext";

export const useVehicles = () => {
  const context = useContext(VehiclesContext);

  if (!context) {
    throw new Error("useVehicles deve ser usado dentro de um VehiclesProvider");
  }
  
  return context;
};
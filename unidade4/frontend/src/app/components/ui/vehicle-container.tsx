import Grid from "@mui/material/Grid2";
import { useVehicles } from "../../../hooks";
import { CardVehicle } from "./card-vehicle";

export function VehicleContainer() {

  const { vehicles } = useVehicles();

  return (
    <Grid container spacing={2}
      marginTop="3rem"
    >
      {vehicles.map(item => (
        <Grid key={item.id} size={{ xs: 2, sm: 4, md: 3 }} >
          <CardVehicle vehicle={item} />
        </Grid>
      ))}      
    </Grid>
  )
}
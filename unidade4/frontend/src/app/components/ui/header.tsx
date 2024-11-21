import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { IVehicleType } from "../../../@libs/types";
import { VehicleTypeService } from "../../../services/vehicle-type.service";

export function Header() {
  const [vehicleTypes, setVehicleTypes] = useState<IVehicleType[]>([]);

  useEffect(()=>{
    VehicleTypeService.getAll()
      .then(result => {
        console.log(result.data)
        setVehicleTypes(result.data)
      })
  },[]);

  return (
    <AppBar
      position="fixed"
      color="default"
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
              variant="h5"
          >
            Mater Rent
          </Typography>
          <Box
            paddingLeft="1rem"
          >
            <Button 
              variant="text" 
              disabled
            >
              Todos
            </Button>

            {vehicleTypes.map(item => (
              <Button 
                key={item.id} 
                variant="text"
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
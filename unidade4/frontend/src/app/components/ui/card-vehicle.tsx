import { Button, Paper, Stack, Typography } from "@mui/material";
import { FormattedNumber, IntlProvider } from "react-intl";
import { IVehicle } from "../../../@libs/types";

type CardVehicleProps = {
  vehicle: IVehicle
}
export function CardVehicle({
  vehicle
}: CardVehicleProps) {
  return (
    <Paper>
      <Stack
        padding="1rem"
        gap={1}
      >
        <Typography
          variant="subtitle1"
          textAlign="center"
        >
          { vehicle.model.name }
        </Typography>

        <Typography
          variant="caption"
        >
          { vehicle.description }
        </Typography>

        <Stack
          justifyContent="center"
          alignItems="center"
        >
          <img  
            src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/${vehicle.photo}`} 
            style={{
              width: '244px'
            }}
          />
        </Stack>

        <Typography  
          padding="0.5rem"
          variant="body2"        
          textAlign="center"
          sx={{
            backgroundColor: 'rgb(245, 245, 245)'
          }}
        >
          <IntlProvider locale="pt-BR">
            <FormattedNumber 
              value={vehicle.priceRent} 
              style="currency"
              currency="BRL"
            />
          </IntlProvider>
        </Typography>

        <Button
          variant="contained"
          size="small"
        >
          Reserve Agora
        </Button>
      </Stack>
    </Paper>
  )
}
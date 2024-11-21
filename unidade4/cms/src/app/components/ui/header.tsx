import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      sx={{
        zIndex: 'tooltip'
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
        >
          Mater Rend - Gestão de Conteúdo
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
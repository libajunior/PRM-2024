import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function SideMenu() {
  return (
    <aside>
      <List
        component="nav"
      >
        <ListItemText 
          primary="Cadastros" />
        <ListItemButton
          href="/vehicle-types"
        >
          <ListItemText primary="Tipos de Veículos" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/vehicle-factories"
        >
          <ListItemText primary="Montadoras" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/vehicle-models"
        >
          <ListItemText primary="Modelos de Veículos" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/vehicles"
        >
          <ListItemText primary="Veículos" />
        </ListItemButton>
      </List>
    </aside>
  )
}

export default SideMenu;
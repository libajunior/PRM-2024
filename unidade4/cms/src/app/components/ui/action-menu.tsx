import { IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit'
import { useLocation, useNavigate } from "react-router-dom";

type ActionMenuProps = {
  itemId: string;
}
function ActionMenu({
  itemId
}: ActionMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleEditForm = () => {
    const baseURL = location.pathname;
    navigate(`${baseURL}/${itemId}`)
  }

  return (
    <Tooltip
      title="Editar/remover o registro"
    >
      <IconButton
      onClick={handleEditForm}
      >
        <EditIcon />
      </IconButton>
    </Tooltip>
  )
}

export default ActionMenu;
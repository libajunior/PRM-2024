import { Stack, Drawer, Typography, Box, Button, IconButton, Tooltip, Divider } from "@mui/material"
import { ReactNode } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

type SideFormProps = {
  open: boolean;
  title: string;
  onSave?: () => void;
  onDelete?: () => void;
  children: ReactNode;
  loading: boolean;
}
function SideForm({
  open,
  title,
  onSave,
  onDelete,
  children,
  loading
}: SideFormProps) {

  const navigate = useNavigate();
  const location = useLocation();

  const handleCancel = () => {
    // Obtém o caminho atual
    const currentPath = location.pathname;

    // Remove o último segmento da URL
    const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));

    // Navega para a nova rota
    navigate(newPath);
  }

  return (
    <Drawer
      anchor="right"
      open={open}
    >
      <Stack
        sx={{
          width: 400,
          flex: 1,
          padding: '5rem 1rem 1rem 1rem'
        }}
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              marginBottom: '1rem'
            }}
          >
            {title}
          </Typography>
          <Divider />
          <Stack
            direction="column"
            gap="1rem"
            sx={{
              marginTop: '2rem',
              padding: '1rem'
            }}
          >
            {children}
          </Stack>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            paddingTop: '1rem',
            borderTop: '1px solid rgba(0,0,0,0.12)'
          }}
        >
          <Stack
            direction="row"
            gap={1}
          >
            <LoadingButton            
              variant="contained"
              onClick={onSave}
              loading={loading}
            >
              Salvar
            </LoadingButton>
            <Button
              variant="text"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancelar
            </Button>
          </Stack>
          {onDelete && (
            <Tooltip
              title="Remover o registro"
            >
              <IconButton
                color="error"
                onClick={onDelete}
                disabled={loading}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}

        </Stack>
      </Stack>
    </Drawer>
  )
}

export default SideForm
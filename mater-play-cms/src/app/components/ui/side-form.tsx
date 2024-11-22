import { Stack, Drawer, Typography, Box, Button, IconButton, Tooltip } from "@mui/material";
import { ReactNode } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

type SideFormProps = {
  open: boolean;
  title: string;
  onSave?: () => void;
  onDelete?: () => void;
  children: ReactNode;
  loading: boolean;
};

function SideForm({
  open,
  title,
  onSave,
  onDelete,
  children,
  loading,
}: SideFormProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCancel = () => {
    const currentPath = location.pathname;
    const newPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
    navigate(newPath);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      PaperProps={{
        sx: { 
          width: 400, 
          display: "flex", 
          flexDirection: "column", 
          height: "100%" 
        },
      }}
    >
      <Box 
        sx={{ 
          padding: "5rem 1rem 1rem 1rem", 
          borderBottom: "1px solid rgba(0,0,0,0.12)" 
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "0.5rem" }}>
          {title}
        </Typography>
      </Box>
      
      <Stack
        gap="1rem"
        sx={{
          marginTop: '1rem',
          flex: 1,
          overflowY: "auto",
          padding: "1rem",
        }}
      >
        {children}
      </Stack>

      <Box
        sx={{
          padding: "1rem",
          borderTop: "1px solid rgba(0,0,0,0.12)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" gap={1}>
          <LoadingButton variant="contained" onClick={onSave} loading={loading}>
            Salvar
          </LoadingButton>
          <Button variant="text" onClick={handleCancel} disabled={loading}>
            Cancelar
          </Button>
        </Stack>
        {onDelete && (
          <Tooltip title="Remover o registro">
            <IconButton color="error" onClick={onDelete} disabled={loading}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Drawer>
  );
}

export default SideForm;
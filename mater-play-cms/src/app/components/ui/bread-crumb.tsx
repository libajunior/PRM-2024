import { Breadcrumbs, Typography } from "@mui/material";

type BreadCrumbProps = {
  title: string;
}
function BreadCrumb({
  title
}: BreadCrumbProps) {
  return (
    <Breadcrumbs 
      separator="›"
      sx={{
        marginBottom: '2rem'
      }}
    >
      <Typography>Home</Typography>
      <Typography>{title}</Typography>
    </Breadcrumbs>
  )
}

export default BreadCrumb;
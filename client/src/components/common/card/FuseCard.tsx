import { Card, CardContent, CardActions } from "@mui/material";

const FuseCard = ({header, content, actions} : any) => {
  return (
    <Card 
      sx={{
        padding: "1.5rem",
        borderRadius: "1rem",
      }}>
      {header}
      <CardContent>
        {content}
      </CardContent>
      <CardActions>
        {actions}
      </CardActions>
    </Card>
  )
}

export default FuseCard

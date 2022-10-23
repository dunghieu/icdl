import {Card, CardContent, CardActions} from '@mui/material';

const FuseCard = ({header, content, actions}: any) => {
  return (
    <Card
      sx={{
        padding: '1.5rem',
        borderRadius: '1rem',
      }}
    >
      {header}
      <CardContent
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        {content}
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        {actions}
      </CardActions>
    </Card>
  );
};

export default FuseCard;

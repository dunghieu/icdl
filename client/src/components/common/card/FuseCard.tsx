import {Card, CardContent, CardActions, CardHeader} from '@mui/material';
import React from 'react';
import parse from 'html-react-parser';

const FuseCard = ({header, content, actions}: any) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card
      onClick={() => setExpanded(!expanded)}
      sx={{
        // backgroundColor: '#0288D1',
        padding: '1.5rem',
        borderRadius: '1rem',
        border: '1px solid black',
      }}
    >
      <CardHeader title={header} />
      <CardContent
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          display: expanded ? 'block' : 'none',
        }}
      >
        {parse(content)}
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

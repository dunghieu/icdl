import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Divider} from '@mui/material';

export default function ActionAreaCardHorizontal({title, content, time}: any) {
  return (
    <Card
      sx={{
        maxWidth: '350px',
        borderRadius: '0',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
          sx={{
            height: '250px',
            borderBottom: '1px solid black',
          }}
        />
        <CardContent
          sx={{
            height: '100px',
            width: 'inherit',
          }}
        >
          <Typography variant="h6" component="div" sx={{color: '#b20530'}}>
            {title}
          </Typography>
          <Divider
            sx={{
              marginY: '.5rem',
              width: '10%',
              borderBottomWidth: '2px',
              borderBottomColor: '#b20530',
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

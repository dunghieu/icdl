import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Divider} from '@mui/material';
import parse from 'html-react-parser';
import {useHistory} from 'react-router-dom';

export default function ActionAreaCardHorizontal({title, content, time, thumbnail, id}: any) {
  const history = useHistory();

  return (
    <Card
      sx={{
        maxWidth: '350px',
        borderRadius: '0',
      }}
    >
      <CardActionArea
        onClick={(e) => {
          e.stopPropagation();
          history.push(`/news/${id}`);
        }}
      >
        <CardMedia
          component="img"
          image={thumbnail}
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
            ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

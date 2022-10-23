import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Divider} from '@mui/material';

export default function ActionAreaCardVertical({title, content, time}: any) {
  return (
    <Card>
      <CardActionArea
        sx={{
          display: 'flex',
          padding: '0.5rem',
          justifyContent: 'flex-start',
        }}
      >
        <div>
          <CardMedia
            component="img"
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            sx={{width: '200px', height: '200px'}}
          />
        </div>
        <div style={{height: '200px', width: 'inherit'}}>
          <CardContent
            sx={{
              height: 'inherit',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            <Typography variant="h6" component="div" sx={{color: '#b20530'}}>
              {title}
            </Typography>
            <Typography gutterBottom variant="body2" sx={{opacity: '.8', fontSize: '.9em'}}>
              {time}
            </Typography>
            <Divider
              sx={{
                marginY: '.5rem',
                width: '10%',
                borderBottomWidth: '2px',
                borderBottomColor: '#b20530',
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}

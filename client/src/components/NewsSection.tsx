import {Container, Grid, Typography} from '@mui/material';
import ActionAreaCardVertical from './common/card/ActionAreaCardVertical';

const gridItem = [
  {
    title: 'title1',
    content: 'content1',
    time: '2021-10-10',
  },
  {
    title: 'title2',
    content: 'content2',
    time: '2021-10-10',
  },
  {
    title: 'title3',
    content: 'content3',
    time: '2021-10-10',
  },
  {
    title: 'title4',
    content: 'content4',
    time: '2021-10-10',
  },
  {
    title: 'title5',
    content: 'content5',
    time: '2021-10-10',
  },
  {
    title: 'title6',
    content: 'content6',
    time: '2021-10-10',
  },
];

const NewsSection = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: '50px',
        marginY: '50px',
      }}
    >
      <Typography variant="h4" sx={{fontWeight: 700, color: '#b20530'}}>
        THÔNG BÁO VÀ TIN TỨC
      </Typography>
      <Grid container spacing={2} sx={{marginTop: '50px'}}>
        {gridItem.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <ActionAreaCardVertical title={item.title} content={item.content} time={item.time} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsSection;

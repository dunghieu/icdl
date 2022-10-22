import {Container, Grid, Typography} from '@mui/material';

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
        <Grid item xs={12} md={6}>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1626126090003-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) center center/cover no-repeat`,
              height: '250px',
            }}
          ></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1626126090003-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) center center/cover no-repeat`,
              height: '250px',
            }}
          ></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1626126090003-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) center center/cover no-repeat`,
              height: '250px',
            }}
          ></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1626126090003-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) center center/cover no-repeat`,
              height: '250px',
            }}
          ></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1626126090003-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) center center/cover no-repeat`,
              height: '250px',
            }}
          ></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1626126090003-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) center center/cover no-repeat`,
              height: '250px',
            }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsSection;

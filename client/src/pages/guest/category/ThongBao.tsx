import {Container, Typography} from '@mui/material';

const ThongBao = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        gap: '50px',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6" sx={{fontWeight: 'bold', padding: '10px 0', color: '#b20530'}}>
        THÔNG BÁO
      </Typography>
    </Container>
  );
};

export default ThongBao;

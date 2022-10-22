import {Container, Typography} from '@mui/material';
import {Box} from '@mui/system';

const VideoIntro = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        justifyContent: 'center',
        display: {xs: 'block', md: 'flex'},
        marginY: '50px',
        gap: '50px',
      }}
    >
      <Box sx={{width: '40%'}}>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/0oFrxChVlCg"
          title="TRUNG TÂM NGOẠI NGỮ TIN HỌC - ĐẠI HỌC NGÂN HÀNG TPHCM"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Box>
      <Box sx={{width: '30%', textAlign: 'justify'}}>
        <Typography variant="h5" sx={{fontWeight: 700, color: '#b20530'}}>
          TRUNG TÂM TIN HỌC
        </Typography>
        <br />
        <Typography sx={{fontWeight: 400}}>Tên tiếng Việt: Trung tâm Tin học</Typography>
        <Typography sx={{fontWeight: 400}}>Tên tiếng Anh: Informatics Center</Typography>
        <Typography sx={{fontWeight: 400}}>
          TRUNG TÂM NGOẠI NGỮ- TIN HỌC tiền thân là Trung Tâm Ngoại Ngữ, được thành lập vào tháng 4
          năm 2006, đến năm 2014, Trung tâm Ngoại ngữ sát nhập với Trung tâm Tin học và có tên chính
          thức là Trung Tâm Ngoại Ngữ – Tin Học.
        </Typography>
      </Box>
    </Container>
  );
};

export default VideoIntro;

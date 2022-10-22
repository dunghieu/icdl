import {Typography, Box} from '@mui/material';

const GiangVien = () => {
  return (
    <>
      <Typography variant="h4" sx={{marginBottom: '20px', color: '#b20530', fontWeight: '700'}}>
        GIẢNG VIÊN
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Typography variant="body1" sx={{textAlign: 'justify'}}>
          &nbsp;&nbsp;&nbsp;&nbsp;Trung tâm Ngoại ngữ – Tin học đặc biệt chú trọng mời đội ngũ giảng
          viên và ban giảng huấn trong nước và nước ngoài là các giảng viên tâm huyết và dày dặn
          kinh nghiệm tham gia giảng dạy và tư vấn các chương trình Ngoại ngữ và Tin học.
        </Typography>
        <Typography variant="body1" sx={{textAlign: 'justify'}}>
          &nbsp;&nbsp;&nbsp;&nbsp;Các giảng viên nước ngoài được chọn lọc kỹ từ đội ngũ giảng viên
          đến từ các nước, Anh, Mỹ, Úc, Canada, Newzealand, Philppin…qua các vòng phóng vấn và đánh
          giá chất lượng giảng dạy.
        </Typography>
        <Typography variant="body1" sx={{textAlign: 'justify'}}>
          &nbsp;&nbsp;&nbsp;&nbsp;Giảng viên trong nước đến từ đội ngũ giảng viên cơ hữu của Trường
          Đại học Ngân hàng thành phố Hồ Chí Minh và các Trường đại học danh tiếng khác có trình độ
          và kinh nghiệm.
        </Typography>
      </Box>
    </>
  );
};

export default GiangVien;

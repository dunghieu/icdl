import {Box, Grid, Typography, Tooltip, IconButton} from '@mui/material';
import {printDocument} from 'utils/helper';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

const TheDuThi = (props: {
  name: string;
  dotthi: number;
  room: string;
  sbd: string;
  firstName: string;
  lastName: string;
  gender: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  placeOfBirth: string;
  testTime: string;
  testDate: string;
}) => {
  const savePdf = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const elem = document.getElementById('divToPrint');
    const opt = {
      orientation: 'l',
      unit: 'px',
    };
    printDocument(elem, opt);
  };
  return (
    <>
      {/* <button onClick={savePdf}>Save</button> */}
      <Tooltip title="In thẻ dự thi">
        <IconButton onClick={savePdf}>
          <LocalPrintshopIcon />
        </IconButton>
      </Tooltip>
      <div
        id="divToPrint"
        style={{
          width: '1122px',
          minWidth: '1122px',
          maxHeight: '1122px',
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          zIndex: -10000,
        }}
      >
        <Box sx={{display: 'flex', gap: '200px', paddingTop: '75px', justifyContent: 'center'}}>
          <Typography variant="h6" fontFamily="serif" gutterBottom>
            TRƯỜNG ĐẠI HỌC THỦY LỢI
          </Typography>
          <Typography variant="h6" fontFamily="serif" gutterBottom>
            <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong>
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: '150px',
            display: 'flex',
            gap: '300px',
            justifyContent: 'space-arround',
          }}
        >
          <Typography variant="h6" fontFamily="serif" gutterBottom>
            <strong>TRUNG TÂM TIN HỌC</strong>
          </Typography>
          <Typography variant="h6" fontFamily="serif" gutterBottom>
            <strong>Độc lập - Tự do - Hạnh phúc</strong>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '50px',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" fontFamily="serif">
            <strong>THẺ DỰ THI</strong>
          </Typography>
          <Typography variant="h6" fontFamily="serif" sx={{textTransform: 'uppercase'}}>
            <strong>
              KỲ THI CHUẨN {props.name} ĐỢT {props.dotthi}
            </strong>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginTop: '50px',
            gap: '25px',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              border: '1px solid black',
              width: '3cm',
              minWidth: '3cm',
              height: '4cm',
              minHeight: '4cm',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2">Ảnh 3x4</Typography>
          </Box>
          <Grid container sx={{width: '800px'}}>
            <Grid item xs={6}>
              <Typography sx={{textOverflow: 'ellipsis'}} variant="body2" fontFamily="serif">
                Phòng thi: {props.room}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" fontFamily="serif">
                SBD: {props.sbd}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" fontFamily="serif">
                Họ và tên: {props.firstName} {props.lastName}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" fontFamily="serif">
                Giới tính:{props.gender}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" fontFamily="serif">
                Ngày sinh:{props.dayOfBirth} - {props.monthOfBirth} - {props.yearOfBirth}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" fontFamily="serif">
                Nơi sinh:{props.placeOfBirth}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="body1"
          fontWeight={700}
          marginLeft="30px"
          marginTop="25px"
          fontFamily="serif"
        >
          Thí sinh mang theo CMND và có mặt tại phòng thi lúc {props.testTime}, ngày{' '}
          {props.testDate}.
        </Typography>
        <Box
          sx={{
            marginTop: '30px',
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '678px',
          }}
        >
          <Typography variant="body2" marginTop="25px" fontFamily="serif">
            Hà Nội, Ngày {('0' + new Date().getDate()).slice(-2)} Tháng{' '}
            {('0' + (new Date().getMonth() + 1)).slice(-2)} Năm {new Date().getFullYear()}
          </Typography>
          <Typography variant="body1" marginTop="10px" fontFamily="serif">
            <strong>TRUNG TÂM TIN HỌC ĐẠI HỌC THỦY LỢI</strong>
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default TheDuThi;

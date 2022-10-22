import {Typography} from '@mui/material';
import DoiNguNhanSuImg from '../../../lib/assets/images/DoiNguNhanSu.png';

const DoiNguNhanSu = () => {
  return (
    <>
      <Typography variant="h4" sx={{marginBottom: '20px', color: '#b20530', fontWeight: '700'}}>
        ĐỘI NGŨ NHÂN SỰ
      </Typography>
      <img src={DoiNguNhanSuImg} alt="doingunhansu" />
    </>
  );
};

export default DoiNguNhanSu;

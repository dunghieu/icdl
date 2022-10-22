import {Typography} from '@mui/material';
import SoDoToChucImg from '../../../lib/assets/images/SoDoToChuc.png';

const SoDoToChuc = () => {
  return (
    <>
      <Typography variant="h4" sx={{marginBottom: '20px', color: '#b20530', fontWeight: '700'}}>
        SƠ ĐỒ TỔ CHỨC
      </Typography>
      <img src={SoDoToChucImg} alt="sodotochuc" />
    </>
  );
};

export default SoDoToChuc;

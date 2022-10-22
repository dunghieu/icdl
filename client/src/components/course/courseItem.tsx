import {Box} from '@mui/material';
import udttBasic from '../../lib/assets/images/udtt-basic.png';

const CourseItem = () => {
  return (
    <Box
      sx={{
        width: '350px',
        height: '350px',
      }}
    >
      <img src={udttBasic} alt="" style={{width: '350px', height: '200px'}} />
    </Box>
  );
};

export default CourseItem;

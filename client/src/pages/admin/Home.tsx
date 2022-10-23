import {Button, Paper, Box, IconButton} from '@mui/material';
import {FuseCard} from 'components';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'store';
import {RootState} from 'store/reducers';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
  const mode = useSelector((state: RootState) => state.Web.mode);
  const dispatch = useDispatch();

  return (
    <FuseCard
      header={'aaaa'}
      content={
        'bbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdasdasdasdasd'
      }
      actions={
        <>
          <IconButton aria-label="">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="">
            <DeleteIcon />
          </IconButton>
        </>
      }
    />
  );
};

export default Home;

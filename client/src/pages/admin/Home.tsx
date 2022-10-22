import {Button, Paper, Box} from '@mui/material';
import {FuseCard} from 'components';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'store';
import {RootState} from 'store/reducers';

const Home = () => {
  const mode = useSelector((state: RootState) => state.Web.mode);
  const dispatch = useDispatch();

  return <FuseCard header={'aaaa'} content={'bbb'} />;
};

export default Home;

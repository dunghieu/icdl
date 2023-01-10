import {Button, Paper, Box, IconButton} from '@mui/material';
import {FuseCard} from 'components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store/reducers';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Home = () => {
  const mode = useSelector((state: RootState) => state.Web.mode);
  const [data, setData] = useState([]);
  const history = useHistory();

  const filterRef = React.useRef<HTMLInputElement>(null);

  const fetchData = async () => {
    const getData = await axios.get(`http://localhost:8080/api/feed?s=${filterRef.current?.value}`);
    const [finalData] = getData.data;
    setData(finalData);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
      await axios.delete(`http://localhost:8080/api/feed/${id}`);
      fetchData();
    }
  };
  const handleEdit = async (id: number, state?: any) => {
    history.push(`/admin/feed/create?edit=true`, {id, ...state});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box marginBottom={1} sx={{display: 'flex', justifyContent: 'space-between'}}>
        <TextField
          inputRef={filterRef}
          label="Lọc"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              fetchData();
            }
          }}
          color="info"
          sx={{
            width: 200,
          }}
        ></TextField>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {data.map((item: any) => (
          <FuseCard
            header={item.title}
            content={item.content}
            actions={
              <>
                <IconButton aria-label="" onClick={() => handleEdit(item.id, item)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="" onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          />
        ))}
      </Box>
    </>
  );
};

export default Home;

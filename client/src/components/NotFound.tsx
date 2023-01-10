import {Box, Button, Icon, IconButton, TextField, Typography} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react';
import {useHistory} from 'react-router-dom';

const NotFound = () => {
  const [searchText, setSearchText] = React.useState('');
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/category?s=${searchText}`);
    window.location.reload();
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h5"
          fontWeight={'bold'}
          gutterBottom
          sx={{
            color: '#b20530',
          }}
        >
          Nothing Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          It seems we can’t find what you’re looking for. Perhaps searching can help.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: 1000,
          bgcolor: 'background.paper',
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Nhập từ khóa tìm kiếm"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{
            borderRadius: 0,
          }}
        />
        <Button
          onClick={handleSearch}
          sx={{
            backgroundColor: '#1f386B',
            borderRadius: 0,
          }}
        >
          <Icon component={SearchOutlinedIcon} />
        </Button>
      </Box>
    </>
  );
};

export default NotFound;

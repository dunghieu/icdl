import React, {useEffect, useState} from 'react';

import QuillEditor from '../../components/editor/QuillEditor';
import {Typography, Button, Snackbar, TextField, Box} from '@mui/material';
import axios from 'axios';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MultipleSelectChip from 'components/common/select/MultipleSelectChip';
import {useHistory, useLocation} from 'react-router-dom';

const theme = createTheme({
  palette: {
    neutral: {
      main: 'none',
      // contrastText: '#fff',
    },
  },
});

const categories = [
  'Thông báo',
  'Các Khóa học',
  'Thông báo CNTT Cơ Bản',
  'Thông báo CNTT Nâng Cao',
  'Thông báo IC3, MOS',
];

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CreateFeed(props: {history: string[]}) {
  const location = useLocation() as any;
  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);

  const [title, setTitle] = location.state?.title ? useState(location.state.title) : useState('');
  const [content, setContent] = location.state?.content
    ? useState(location.state.content)
    : useState('');
  const [category, setCategory] = useState('');
  const [files, setFiles] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onEditorChange = (value: React.SetStateAction<string>) => {
    setContent(value);
    // console.log('content', content);
  };

  const onFilesChange = (files: React.SetStateAction<never[]>) => {
    setFiles(files);
  };

  const handleCancel = () => {
    history.goBack();
  };

  const onSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault();

    if (!title || !content || !category) {
      return alert('Vui lòng nhập đầy đủ thông tin');
    }

    const variables = {
      title: title,
      content: content,
      category: category,
    };

    if (params && params.get('edit') === 'true') {
      axios
        .patch(`http://localhost:8080/api/feed/${location.state?.id}`, variables)
        .then((response) => {
          if (response) {
            setOpen(true);
            setTimeout(() => {
              props.history.push('/admin');
            }, 1000);
          }
        });
    } else {
      axios.post('http://localhost:8080/api/feed', variables).then((response) => {
        if (response) {
          setOpen(true);
          setTimeout(() => {
            props.history.push('/admin');
          }, 1000);
        }
      });
    }
  };
  return (
    <div style={{maxWidth: '700px', margin: '2rem auto'}}>
      <ThemeProvider theme={theme}>
        <Typography variant="h4" component="h2" sx={{textAlign: 'center'}}>
          {params && params.get('edit') === 'true' ? 'Cập nhật bài viết' : 'Tạo bài viết'}
        </Typography>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Tiêu đề"
          InputLabelProps={{shrink: true}}
          variant="outlined"
          fullWidth
          size="small"
          margin="normal"
          color="neutral"
        />

        <MultipleSelectChip
          label="Danh mục"
          value={categories}
          get={(value: string | string[]) => {
            if (typeof value === 'string') {
              setCategory(value);
            }
            if (Array.isArray(value)) {
              setCategory(value.join(','));
            }
          }}
        />
      </ThemeProvider>
      <QuillEditor
        placeholder={''}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
        editInit={location.state?.content}
      />

      <form onSubmit={onSubmit}>
        <Box sx={{justifyContent: 'center', margin: '2rem', display: 'flex', gap: '25px'}}>
          <Button type="submit" variant="contained" color="info">
            Submit
          </Button>
          {params && params.get('edit') == 'true' ? (
            <Button variant="outlined" color="info" onClick={handleCancel}>
              Cancel
            </Button>
          ) : null}
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
              {params && params.get('edit') == 'true' ? 'Cập nhật thành công' : 'Tạo thành công'}
            </Alert>
          </Snackbar>
        </Box>
      </form>
    </div>
  );
}

export default CreateFeed;

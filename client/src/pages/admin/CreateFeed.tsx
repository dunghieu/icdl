import React, {useEffect, useState} from 'react';

import QuillEditor from '../../components/editor/QuillEditor';
import {Typography, Button, Snackbar, TextField} from '@mui/material';
import axios from 'axios';
import {useSelector} from 'react-redux';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MultipleSelectChip from 'components/common/select/MultipleSelectChip';

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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
    console.log('content', content);
  };

  const onFilesChange = (files: React.SetStateAction<never[]>) => {
    setFiles(files);
  };

  const onSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault();

    setContent('');

    const variables = {
      title: title,
      content: content,
      category: category,
    };

    axios.post('http://localhost:8080/api/feed', variables).then((response) => {
      if (response) {
        setOpen(true);

        setTimeout(() => {
          props.history.push('/admin');
        }, 2000);
      }
    });
  };
  return (
    <div style={{maxWidth: '700px', margin: '2rem auto'}}>
      <ThemeProvider theme={theme}>
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
      <QuillEditor placeholder={''} onEditorChange={onEditorChange} onFilesChange={onFilesChange} />

      <form onSubmit={onSubmit}>
        <div style={{textAlign: 'center', margin: '2rem'}}>
          <Button type="submit" variant="contained" color="info">
            Submit
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
              Create Succeed!
            </Alert>
          </Snackbar>
        </div>
      </form>
    </div>
  );
}

export default CreateFeed;

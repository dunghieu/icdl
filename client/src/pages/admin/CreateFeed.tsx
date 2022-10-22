import React, {useEffect, useState} from 'react';

import QuillEditor from '../../components/editor/QuillEditor';
import {Typography, Button, Snackbar, IconButton, TextField} from '@mui/material';
import axios from 'axios';
import {useSelector} from 'react-redux';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CreateFeed(props: {history: string[]}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
    };

    axios.post('http://localhost:8080/api/feed', variables).then((response) => {
      if (response) {
        setOpen(true);

        setTimeout(() => {
          props.history.push('/blog');
        }, 2000);
      }
    });
  };

  return (
    <div style={{maxWidth: '700px', margin: '2rem auto'}}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Title"
        InputLabelProps={{shrink: true}}
        id="outlined-basic"
        variant="outlined"
        fullWidth
        size="small"
        margin="normal"
        color="info"
      />
      <QuillEditor
        placeholder={'Start Posting Something'}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />

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

import React, {useEffect, useState} from 'react';

import QuillEditor from '../../components/editor/QuillEditor';
import {Typography, Button, Snackbar, IconButton} from '@mui/material';
import axios from 'axios';
import {useSelector} from 'react-redux';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CreateFeed(props: {history: string[]}) {
  const user = useSelector((state: any) => state.user);

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
    console.log(content);
  };

  const onFilesChange = (files: React.SetStateAction<never[]>) => {
    setFiles(files);
  };

  const onSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault();

    setContent('');

    if (user.userData && !user.userData.isAuth) {
      return alert('Please Log in first');
    }

    const variables = {
      content: content,
      userID: user.userData._id,
    };

    axios.post('/api/feed', variables).then((response) => {
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
      <div style={{textAlign: 'center'}}></div>
      <QuillEditor
        placeholder={'Start Posting Something'}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />

      <form onSubmit={onSubmit}>
        <div style={{textAlign: 'center', margin: '2rem'}}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
              This is a success message!
            </Alert>
          </Snackbar>
        </div>
      </form>
    </div>
  );
}

export default CreateFeed;

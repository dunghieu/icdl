import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Link, TextField, Typography} from '@mui/material';
import axios from 'axios';
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getMetadata,
  getBlob,
} from 'firebase/storage';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BaiThiModal(props: any) {
  const [score, setScore] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setTimeout(() => {
      document.body
        .getElementsByClassName('disable-img')[0]
        ?.addEventListener('contextmenu', (e) => e.preventDefault());
    }, 100);
  }, [open]);

  const handleSubmit = async () => {
    const {name} = props;
    const arr = name.split('_').slice(0, -1);
    const [unit, sbd, room] = arr;
    const data = {
      unit,
      sbd,
      room,
      score,
    };
    await axios.post('http://localhost:8080/api/student-exam-mapping/update-score', data);
    setScore('');
    handleClose();
  };

  const handleDownload = async (phach) => {
    const {url} = props;
    const blob = await getBlob(ref(getStorage(), url));
    const newUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = newUrl;
    console.log(a.href);
    a.download = `${phach}.xlsx`;
    a.click();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant={'contained'} color="info">
        {props.phach}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Button variant="contained" color="info" onClick={() => handleDownload(props.phach)}>
              Tải xuống
            </Button>
            <TextField
              variant="outlined"
              // color="neutral"
              margin="dense"
              placeholder="Nhập điểm"
              fullWidth
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit} color="info">
              Chấm điểm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

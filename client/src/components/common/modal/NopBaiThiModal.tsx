import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {IconButton, Link, Tooltip} from '@mui/material';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import axios from 'axios';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NopBaiThiModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const [selectedFile1, setSelectedFile1] = React.useState<any>(null);
  const [selectedFile2, setSelectedFile2] = React.useState<any>(null);
  const [selectedFile3, setSelectedFile3] = React.useState<any>(null);
  const [fileData, setFileData] = React.useState<any>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const {folderDate, folderRoom, sbd, name} = props;
    const getData = await axios.get(
      `http://localhost:8080/api/file/files-by-student?room=${folderRoom}&date=${folderDate}&sbd=${sbd}`
    );
    const finalData = getData.data;
    setFileData(finalData);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleFileSelect1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
      setSelectedFile1(event.target.files[0]);
    }
  };
  const handleFileSelect2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
      setSelectedFile2(event.target.files[0]);
    }
  };
  const handleFileSelect3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
      setSelectedFile3(event.target.files[0]);
    }
  };

  const handleImportFile = async (file: any, unit: string) => {
    const {folderDate, folderRoom, sbd, name} = props;
    const formData = new FormData();
    formData.append('folderDate', folderDate);
    formData.append('folderRoom', folderRoom);
    formData.append('sbd', sbd);
    formData.append('name', name);
    formData.append('unit', unit);
    formData.append('file', file);
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/file/upload',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (selectedFile1) {
      const unit = 'Bai1';
      handleImportFile(selectedFile1, unit);
      setSelectedFile1(null);
    }
    if (selectedFile2) {
      const unit = 'Bai2';
      handleImportFile(selectedFile2, unit);
      setSelectedFile2(null);
    }
    if (selectedFile3) {
      const unit = 'Bai3';
      handleImportFile(selectedFile3, unit);
      setSelectedFile3(null);
    }
    fetchData();
    console.log('fileData', fileData);
  }, [selectedFile1, selectedFile2, selectedFile3]);

  return (
    <div>
      <Tooltip title="Nộp bài thi">
        <IconButton onClick={handleOpen}>
          <AssignmentReturnedIcon />
        </IconButton>
      </Tooltip>
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
              width: '30%',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" color="info" component="label">
              Nộp bài 1
              <input id="file1" type="file" hidden onChange={handleFileSelect1} />
            </Button>
            <Link download href={fileData?.find((item: any) => item.name.startsWith('Bai1'))?.url}>
              {fileData?.find((item: any) => item.name.startsWith('Bai1')) ? 'Đã nộp' : ''}
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '30%',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" color="info" component="label">
              Nộp bài 2
              <input id="file2" type="file" hidden onChange={handleFileSelect2} />
            </Button>
            <Link download href={fileData?.find((item: any) => item.name.startsWith('Bai2'))?.url}>
              {fileData?.find((item: any) => item.name.startsWith('Bai2')) ? 'Đã nộp' : ''}
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '30%',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" color="info" component="label">
              Nộp bài 3
              <input id="file3" type="file" hidden onChange={handleFileSelect3} />
            </Button>
            <Link download href={fileData?.find((item: any) => item.name.startsWith('Bai3'))?.url}>
              {fileData?.find((item: any) => item.name.startsWith('Bai3')) ? 'Đã nộp' : ''}
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

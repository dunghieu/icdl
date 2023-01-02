import {Box, Grid, Typography, Tooltip, IconButton, Button} from '@mui/material';
import {printDocuments} from 'utils/helper';

const DanhSachDuThi = (props: {
  exam: string;
  series: number;
  room: string;
  rows: {sbd: string; name: string; citizenId: string; avatar: string}[];
}) => {
  const page = Math.ceil(props.rows.length / 16);
  const pageMap = Array.from(Array(page).keys());
  const savePdf = (e: any) => {
    const elems = document.getElementsByClassName(`divToPrint-${e}`);
    const arrayElems = Array.from(elems);
    const opt = {
      orientation: 'portrait',
      unit: 'px',
    };
    const custom = {
      pdfName: `DanhSachDuThi_${props.room}`,
    };
    printDocuments(arrayElems, opt, custom);
  };
  return (
    <>
      {/* <button onClick={savePdf}>Save</button> */}
      <Button variant="contained" color="info" onClick={() => savePdf(props.room)}>
        In danh sách thí sinh
      </Button>
      <div
        style={{
          border: '1px solid black',
          width: '794px',
          minWidth: '794px',
          height: '1123px',
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          zIndex: -10000,
        }}
      >
        {pageMap.map((pageI, index) => {
          return (
            <Box
              key={pageI}
              className={`divToPrint-${props.room}`}
              sx={{
                display: 'flex',
                paddingTop: '20px',
                flexDirection: 'column',
                gap: '25px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{width: '100%'}}>
                <Typography variant="h6" fontFamily="serif" textAlign="center">
                  <strong> {`KÌ THI ${props.exam} ĐỢT ${props.series}`}</strong>
                </Typography>

                <Typography variant="body1" marginLeft="50px">
                  Phòng thi: {props.room}
                </Typography>
              </Box>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={4}
                columnSpacing={8}
                sx={{width: '210mm'}}
              >
                {props.rows &&
                  props.rows.slice(16 * pageI, 16 * (pageI + 1)).map((row, index) => (
                    <Grid item xs={3} key={row.sbd}>
                      <Box sx={{marginLeft: '-20px', marginTop: '10px', textAlign: 'center'}}>
                        <Typography variant="body2">{row?.name}</Typography>
                        <Typography variant="body2">SBD: {row?.sbd}</Typography>
                        <Typography variant="body2">CCCD: {row?.citizenId}</Typography>
                      </Box>
                      <Box
                        sx={{
                          border: '1px solid black',
                          width: '3cm',
                          minWidth: '3cm',
                          height: '4cm',
                          minHeight: '4cm',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {row?.avatar ? (
                          <img src={row?.avatar} width="100%" height="100%" />
                        ) : (
                          <Typography variant="body2">Ảnh 3x4</Typography>
                        )}
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          );
        })}
      </div>
    </>
  );
};

export default DanhSachDuThi;

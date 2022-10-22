import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export enum AlertType {
  error = 'error',
  warning = 'warning',
  info = 'info',
  success = 'success'
}

export enum AlertVariant {
  standard = 'standard',
  outlined = 'outlined',
  filled = 'filled'
}

export default function FuseAlert(type: AlertType, message: string, appearance?: AlertVariant) {
  return (
    <Stack sx={{ width: '100%' }}>
      <Alert severity={type} variant={appearance} >{message}</Alert>
    </Stack>
  );
}

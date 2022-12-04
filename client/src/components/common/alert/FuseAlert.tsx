import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export enum AlertType {
  error = 'error',
  warning = 'warning',
  info = 'info',
  success = 'success',
}

export enum AlertVariant {
  standard = 'standard',
  outlined = 'outlined',
  filled = 'filled',
}

export default function FuseAlert(props: {
  type: AlertType;
  message: string;
  appearance?: AlertVariant;
}) {
  return (
    <Stack sx={{width: '100%'}}>
      <Alert severity={props.type} variant={props.appearance}>
        {props.message}
      </Alert>
    </Stack>
  );
}

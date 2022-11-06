import {Button} from '@mui/material';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react';
import {useHistory} from 'react-router-dom';
import PopupDialog from '../alert/PopupDialog';

const CheckoutForm = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    history.replace(`/`);
  };

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const result = await axios.post('http://localhost:8080/api/payment', {
      intentId: props.paymentIntentId,
    });
    console.log(result);

    if (result) {
      handleClickOpen();
    }
  };
  return (
    <form
      style={{
        width: '55%',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
      }}
    >
      <PaymentElement />
      <Button variant="contained" onClick={handleSubmit} color="error">
        Submit
      </Button>
      <PopupDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        title="Thanh toán thành công"
        content="Hệ thống đã nhận được thanh toán của bạn."
      />
    </form>
  );
};

export default CheckoutForm;

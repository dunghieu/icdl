const Elements = require('@stripe/react-stripe-js').Elements;
const loadStripe = require('@stripe/stripe-js').loadStripe;
import {Box, Container, Typography} from '@mui/material';
import axios from 'axios';
import GuestFooter from 'components/footer/GuestFooter';
import GuestHeader from 'components/header/GuestHeader';
import {useEffect} from 'react';
import CheckoutForm from './CheckoutForm';
import React from 'react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51LzNKHBllFThz4empyjFJhbloMVn0YkoGXmJC04YR5bICRzaeK3XWHmIXy1GTe2E5z3EZQJeDhNdp0Ns9Ur50B4a00ptx4fLJK'
);

function PaymentForm(props: any) {
  const [data, setData] = React.useState<any>({});
  const [paymentData, setPaymentData] = React.useState<any>({});
  const clientSecret = props.match.params.secret;
  const paymentIntentId = props.match.params.id;
  const fetchData = async () => {
    const payment = await axios.get(`http://localhost:8080/api/payment/${paymentIntentId}`);
    const student = await axios.get(`http://localhost:8080/api/student/${payment.data.studentId}`);
    setData(student.data);
    setPaymentData(payment.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  return (
    <>
      <GuestHeader />
      <Container
        maxWidth="md"
        sx={{
          height: '562px',
          padding: '50px 20px',
          display: 'flex',
        }}
      >
        <Box
          sx={{
            marginTop: '50px',
            width: '40%',
          }}
        >
          <Typography variant="h5" sx={{marginBottom: '20px'}}>
            Thông tin thanh toán
          </Typography>
          <Typography variant="body1" sx={{marginBottom: '20px'}}>
            Họ và tên: {data.firstName} {data.lastName}
          </Typography>
          <Typography variant="body1" sx={{marginBottom: '20px'}}>
            Ngày sinh: {data.dayOfBirth} - {data.monthOfBirth} - {data.yearOfBirth}
          </Typography>

          <Typography variant="body1" sx={{marginBottom: '20px'}}>
            Email: {data.email}
          </Typography>
          <Typography variant="body1" sx={{marginBottom: '20px'}}>
            Số điện thoại: {data.phoneNumber}
          </Typography>
          <Typography variant="body1" sx={{marginBottom: '20px'}}>
            Địa chỉ: {data.placeOfBirth}
          </Typography>
          <Typography variant="h6" sx={{marginBottom: '20px'}}>
            Số tiền thanh toán:{' '}
            {paymentData.amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND
          </Typography>
        </Box>
        <hr />
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm paymentIntentId={paymentIntentId} />
        </Elements>
      </Container>
      <GuestFooter />
    </>
  );
}

export default PaymentForm;
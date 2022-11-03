import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as sendgridTransport from 'nodemailer-sendgrid-transport';
import * as dotenv from 'dotenv';
import { Student } from '../student';
dotenv.config();
// const a = {
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     type: 'OAuth2',
//     user: process.env.NODE_MAILER_USER,
//     clientId: process.env.NODE_CLIENT_ID,
//     clientSecret: process.env.NODE_CLIENT_SECRET,
//     refreshToken: process.env.NODE_MAILER_REFRESH_TOKEN,
//     accessToken: process.env.NODE_MAILER_ACCESS_TOKEN,
//     expires: 3599
//   }
// };
//nodemailer configuration
const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: process.env.SENDGRID_API_KEY
  }
}));
@Injectable()
export class EmailService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }
    //function to send invoice mail to admin
    sendInviteEmail = async (student: Student) => {
      try {
        const info = await transporter.sendMail({
          to: student.email, //receiver email
          from: 'Hệ Thống Thi Chứng Chỉ Tin Học <1851061662@e.tlu.edu.vn>', // sender address
          subject: 'Receipt', // Subject line
          html: `
                <h2>************Paid Invoice***************</h2> 
                <hr/><hr/>
                <h3>Student Info : </h3>
                <h4><span><b>Student Name:         </b> ${student.firstName} ${student.lastName} <span/></h4>
                <h4><span><b>Student Email:        </b> ${student.email} <span/></h4>
                <hr/> <hr/>
                <h3>Note :</h3>
                <span>You will receive exactly the Printed Wallet Amount as ordered <span/>
                <span>Only the Payer Email on this Paid Invoice can be used for delivery inquiries and confirmation regarding the order <span/> <br/>
                <span>Your wallet design will be shiped to you as soon as possible. 
                Once your wallet design is received in hand,please follow the simple delivery confirmation instructions included in the letter.
                Thankyou, Crypto Farm, Canada<span/>
                </h4>
                <h2>**************End*****************</h2>`
        });
        const mail = {
          info: info,

        };
        console.log('message checked=>', mail);
      } catch (err) {
        throw new BadRequestException(err.message);
      }
    };
    // <h4><span><b>Merchant Email:     </b> ${invoiceData.merchantEmail} <span/></h4>
    // <h4><span><b>Merchant ID:        </b> ${invoiceData.merchantEmail} <span/></h4>

}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as sendgridTransport from 'nodemailer-sendgrid-transport';
import * as dotenv from 'dotenv';
import { Student } from '../student';
import { Payment } from '../payment/entities';
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
    sendInviteEmail = async (student: Student, payment: Payment) => {
      try {
        const info = await transporter.sendMail({
          to: student.email, //receiver email
          from: 'Hệ Thống Thi Chứng Chỉ Tin Học <1851061662@e.tlu.edu.vn>', // sender address
          subject: `Mã đăng nhập: ${student.code}`, // Subject line
          html: `
                <span>Mã đăng nhập của bạn là: <strong>${student.code}<strong/><span/>
                <br/>
                <span>Thí sinh có thể tra cứu thông tin cá nhân tại địa chỉ http://localhost:3000/tra-cuu <span/>
                <br/>
                <br/>
                <br/>
                <span>Để biết thêm chi tiết về lịch thi và các khóa học. 
                Vui lòng truy cập website: http://localhost:3000. <span/>
                <span>Mọi thắc mắc vui lòng liên hệ:</span>
                <span>----------------------------------------------------------</span>
                <span>Điện thoại: 035 555 5555</span>
                <span> Địa chỉ: 175 Tây Sơn, Đống Đa, Hà Nội</span>
                <span/>
                
               `
        });
        const mail = {
          info: info,

        };
        console.log('message checked=>', mail);
        return mail;
      } catch (err) {
        throw new BadRequestException(err.message);
      }
    };
    // <h4><span><b>Merchant Email:     </b> ${invoiceData.merchantEmail} <span/></h4>
    // <h4><span><b>Merchant ID:        </b> ${invoiceData.merchantEmail} <span/></h4>

}

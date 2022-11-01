import { pick } from 'lodash';
import { PaymentEntity } from '../entities';

export class PaymentDto {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  account_id: number;
  order_id: number;
  description: string;
  status: string;
  transaction_amt: number;
  date: Date;
  payment_method: string;
  charge_id: string;
  transaction_type: string;
  transaction_description: string;

  constructor(init?: PaymentEntity) {
    if (init) {
      Object.assign(
        this,
        pick(init, [
          'id',
          'created_at',
          'updated_at',
          'deleted_at',
          'account_id',
          'order_id',
          'status',
          'transaction_amt',
          'description',
          'payment_method',
          'charge_id',
          'date',
          'transaction_type',
          'transaction_description',
        ]),
      );
    }
  }
}

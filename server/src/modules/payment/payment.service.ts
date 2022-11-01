import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// application
import { PaymentEntity } from './entities';
import {
  CreatePaymentIntentPayload,
  CreatePaymentPayload,
  PaymentRequest,
} from './payloads';
import { PaymentDto } from './dtos';
import Stripe from 'stripe';
import { StripeConfig } from './stripe.config';
@Injectable()
export class PaymentService {
  private stripe : Stripe;
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepository: Repository<PaymentEntity>,
  ) {
    this.stripe = new Stripe(StripeConfig.secret_key, {
      apiVersion: '2022-08-01',
    });
  }

  findById(id: number) {
    return this.paymentRepository.findOneBy({id});
  }

  find(query: any) {
    return this.paymentRepository.find(query);
  }

  async create(body: CreatePaymentPayload) {
    const payment = this.paymentRepository.create(body);
    return this.paymentRepository.save(payment);
  }

  async search(query: PaymentRequest) {
    const qb = this.paymentRepository.createQueryBuilder('payment');
    if (query.account_id) {
      qb.where('account_id = :account_id ', {
        account_id: query.account_id,
      });
    }
    if (query.order_id) {
      qb.where('order_id = :order_id ', {
        order_id: query.order_id,
      });
    }

    qb.take(query.limit);
    qb.skip(query.offset);
    qb.orderBy({ [query.sortBy]: query.sort });
    const [payments, total] = await qb.getManyAndCount();
    return {
      data: payments.map((payment) => new PaymentDto(payment)),
      total,
    };
  }

  async createPaymentIntent(body: CreatePaymentIntentPayload) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: body.amount,
      currency: body.currency || 'VND',
      // automatic_payment_methods: {
      //   enabled: true,
      // },
    });
    return {
      clientSecret: paymentIntent.client_secret,
      // publicKey: StripeConfig.public_key,
    };
  }

  async confirmPaymentIntent(paymentIntentId: string) {
    const paymentIntent = await this.stripe.paymentIntents.confirm(
      paymentIntentId,
      {
        payment_method: 'pm_card_visa',
      }
    );
    return paymentIntent;
  }
}

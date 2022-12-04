import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
// application
import { Payment } from './entities';
import {
  CreatePaymentIntentPayload,
} from './payloads';
import Stripe from 'stripe';
import { StripeConfig } from './stripe.config';
import { PaymentDto, UpdatePaymentDto } from './dtos';
import { PaymentSearchQueryDto } from './dtos/payment-search-query.dto';
@Injectable()
export class PaymentService {
  private stripe : Stripe;
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
    private readonly connection: Connection,
  ) {
    this.stripe = new Stripe(StripeConfig.secret_key, {
      apiVersion: '2022-08-01',
    });
  }

  async findById(id: number) {
    const payment = await this.paymentRepository.findOneBy({ id });
    if (!payment) {
      return null;
    }
    return payment;
  }

  async findOneBy(query: PaymentSearchQueryDto) {
    const payment = await this.paymentRepository.findOneBy(query);
    if (!payment) {
      return null;
    }
    return payment;
  }

  async findByIntentId(intentId: string) {
    return this.paymentRepository.findOneBy({ intentId });
  }

  find(query: any) {
    return this.paymentRepository.find(query);
  }

  async create(body: PaymentDto) {
    const paymentIntent = await this.createPaymentIntent({
      amount: body.amount,
      currency: 'vnd',
    });

    const payment = this.paymentRepository.create(body);
    payment.intentId = paymentIntent.paymentId;
    payment.secret = paymentIntent.clientSecret;
    return this.paymentRepository.save(payment);
  }

  async update(id: number | string, body: UpdatePaymentDto): Promise<Payment> {
    let payment;
    if (typeof id === 'string') {
      payment = await this.findOneBy({ intentId: id });
    }
    if (typeof id === 'number') {
      payment = await this.findById(id);
    }
    const paymentIntent = await this.createPaymentIntent({
      amount: body.amount,
      currency: 'vnd',
    });
    payment.intentId = paymentIntent.paymentId;
    payment.secret = paymentIntent.clientSecret;
    payment.amount = body.amount;
    return this.paymentRepository.save(payment);
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
      paymentId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
      publicKey: StripeConfig.public_key,
    };
  }

  async confirmPaymentIntent(paymentIntentId: string) {
    const paymentIntent = await this.stripe.paymentIntents.confirm(
      paymentIntentId,
      {
        payment_method: 'pm_card_visa',
        return_url: 'https://example.com/order/123/complete',
      }
    );
    return paymentIntent;
  }

  async generate() {
    // const student = await this.connection.getRepository(Student).find();
    // const payments = await this.paymentRepository.find();
    // for (const item of payments) {
    //   // const amount = item.type === StudentType.ON ? 400000 : item.type === StudentType.THI ? 1000000 : 1400000;
    //   // const paymentIntent = await this.createPaymentIntent({
    //   //   amount: amount,
    //   //   currency: 'vnd',
    //   // });
    //   // await this.create({
    //   //   studentId: item.id,
    //   //   intentId: paymentIntent.paymentId,
    //   //   amount: amount,
    //   //   status: 0,
    //   //   secret: paymentIntent.clientSecret,
    //   // });

    //   // const result = await this.confirmPaymentIntent(item.intentId);
    //   // if (result.status === 'succeeded') {
    //   //   await this.update(item.id, { status: 1 });
    //   // }
    // }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// application
import { Payment } from './entities';
import {
  CreatePaymentIntentPayload,
} from './payloads';
import Stripe from 'stripe';
import { StripeConfig } from './stripe.config';
import { PaymentDto, UpdatePaymentDto } from './dtos';
@Injectable()
export class PaymentService {
  private stripe : Stripe;
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
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

  async findByIntentId(intentId: string) {
    return this.paymentRepository.findOneBy({ intentId });
  }

  find(query: any) {
    return this.paymentRepository.find(query);
  }

  async create(body: PaymentDto) {
    const payment = this.paymentRepository.create(body);
    return this.paymentRepository.save(payment);
  }

  async update(id: number | string, body: UpdatePaymentDto) {
    let payment;
    if (typeof id === 'string') {
      payment = await this.paymentRepository.findOneBy({ intentId: id });
    }
    if (typeof id === 'number') {
      payment = await this.paymentRepository.findOneBy({ id });
    }

    console.log(payment);
    const updatedPayment = Object.assign(payment, body);
    return this.paymentRepository.save(updatedPayment);
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
}

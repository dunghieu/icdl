import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// application
import { PaymentEntity } from './entities';
import {
  CreatePaymentIntentPayload,
} from './payloads';
import Stripe from 'stripe';
import { StripeConfig } from './stripe.config';
import { PaymentDto } from './dtos';
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

  async create(body: PaymentDto) {
    const payment = this.paymentRepository.create(body);
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
      //clientSecret: paymentIntent.client_secret,
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

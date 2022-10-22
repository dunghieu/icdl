import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { BadRequestException } from '@nestjs/common';
import { CreatePaymentIntentPayload } from './payloads';

@Injectable()
export class PaymentProvider {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-08-01',
    });
  }

  async createPaymentIntent(body: CreatePaymentIntentPayload) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: body.amount,
      currency: body.currency || 'SGD',
      // automatic_payment_methods: {
      //   enabled: true,
      // },
    });
    return {
      clientSecret: paymentIntent.client_secret,
      // publicKey: StripeConfig.public_key,
    };
  }
}


import { Injectable } from '@nestjs/common';
import { EventStoreService } from './event-store.service';

@Injectable()
export class OrderCommandHandler {
  constructor(private readonly eventStore: EventStoreService) {}

  createOrder(orderId: string, product: string) {
    const event = { type: 'OrderCreated', orderId, product };
    this.eventStore.saveEvent(event);
    return event;
  }
}

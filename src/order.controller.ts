
import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrderCommandHandler } from './order-command.handler';
import { EventStoreService } from './event-store.service';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderCommandHandler: OrderCommandHandler,
    private readonly eventStore: EventStoreService,
  ) {}

  @Post('create')
  createOrder(@Body() body: { orderId: string; product: string }) {
    return this.orderCommandHandler.createOrder(body.orderId, body.product);
  }

  @Get('events')
  getEvents() {
    return this.eventStore.getEvents();
  }
}

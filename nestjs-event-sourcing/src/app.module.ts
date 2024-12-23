
import { Module } from '@nestjs/common';
import { EventStoreService } from './event-store.service';
import { OrderCommandHandler } from './order-command.handler';
import { OrderController } from './order.controller';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [EventStoreService, OrderCommandHandler],
})
export class AppModule {}

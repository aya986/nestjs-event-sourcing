
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventStoreService {
  private events: any[] = [];

  saveEvent(event: any) {
    this.events.push(event);
    console.log('Event stored:', event);
  }

  getEvents() {
    return this.events;
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer.service';
import { SMM_TOPIC } from './smm.constants';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class SmmService {
  constructor(
    private readonly producerService: ProducerService,
    @Inject('SMM') private readonly smmClient: ClientKafka,
  ) {}

  async getMessage() {
    return await this.producerService.produce({
      topic: SMM_TOPIC,
      messages: [
        {
          value: 'Hello World',
        },
      ],
    });
  }

  async createMessage(dto) {
    return this.smmClient.emit(SMM_TOPIC, dto);
  }
}

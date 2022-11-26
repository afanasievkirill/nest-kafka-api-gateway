import { Body, Controller, Post } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer.service';

@Controller('smm')
export class SmmController {
  constructor(private readonly producerService: ProducerService) {}

  @Post('create')
  async createMessage(@Body() dto) {
    await this.producerService.produce({
      topic: 'test',
      messages: dto,
    });
    return '++++';
  }
}

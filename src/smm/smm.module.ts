import { Module } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer.service';
import { SmmController } from './smm.controller';

@Module({
  controllers: [SmmController],
  providers: [ProducerService],
  exports: [],
})
export class SmmModule {}

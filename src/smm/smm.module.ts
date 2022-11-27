import { Module } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer.service';
import { SmmController } from './smm.controller';
import { SmmService } from './smm.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SMM',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'billing',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'billing-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [SmmController],
  providers: [ProducerService, SmmService],
  exports: [],
})
export class SmmModule {}

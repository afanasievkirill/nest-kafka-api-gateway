import { Module } from '@nestjs/common';
import { SmmModule } from './smm/smm.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [SmmModule, KafkaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

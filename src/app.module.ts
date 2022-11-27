import { Module } from '@nestjs/common';
import { SmmModule } from './smm/smm.module';
import { KafkaModule } from './kafka/kafka.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), SmmModule, KafkaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

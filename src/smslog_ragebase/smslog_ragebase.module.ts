import { Module } from '@nestjs/common';
import { SmslogRagebaseController } from './smslog_ragebase.controller';
import { SmslogRagebaseService } from './smslog_ragebase.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SmsHitLogSchema } from 'src/Schema/smshit_log.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:'SmsHitLog', schema: SmsHitLogSchema}])],
  controllers: [SmslogRagebaseController],
  providers: [SmslogRagebaseService]
})
export class SmslogRagebaseModule {}

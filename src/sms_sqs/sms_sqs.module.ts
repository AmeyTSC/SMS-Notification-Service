import { Module, OnModuleInit } from '@nestjs/common';
import { SmsSqsController } from './sms_sqs.controller';
import { SmsSqsService } from './sms_sqs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SmsHitLogSchema } from 'src/Schema/smshit_log.schema';
import { SmsLogSchema } from 'src/Schema/sms_log.schema';
import { SmsTemplateService } from 'src/Utils/sms_template';

@Module({
  imports: [MongooseModule.forFeature([{name: 'SmsLog', schema: SmsLogSchema}]),],
  controllers: [SmsSqsController],
  providers: [SmsSqsService]
})

export class SmsSqsModule {}



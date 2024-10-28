import { Module } from '@nestjs/common';
import { SmsTriggerController } from './sms_trigger.controller';
import { SmsTriggerService } from './sms_trigger.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SmsHitLogSchema } from 'src/Schema/smshit_log.schema';
import { SmsLogSchema } from 'src/Schema/sms_log.schema';
import { SmsErrorLogSchema } from 'src/Schema/smserror_log.schema';

import { SmsTemplateService } from 'src/utils/sms_template';

@Module({
  imports: [MongooseModule.forFeature([{name: 'SmsHitLog', schema: SmsHitLogSchema}]),
            MongooseModule.forFeature([{name: 'SmsLog', schema: SmsLogSchema}]),
            MongooseModule.forFeature([{name: 'SmsErrorLog', schema : SmsErrorLogSchema}]), 
],
  controllers: [SmsTriggerController],
  providers: [SmsTriggerService,SmsTemplateService]
})
export class SmsTriggerModule {}

import { Module } from '@nestjs/common';
import { TemplatehitsController } from './templatehits.controller';
import { TemplatehitsService } from './templatehits.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  whatsapp_logs,
  WhatsapplogSchema,
} from '../Schema/whatsapp_logs.schema';
import { SmsLog, SmsLogSchema } from 'src/Schema/sms_log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SmsLog.name, schema: SmsLogSchema }]),
    MongooseModule.forFeature([
      { name: whatsapp_logs.name, schema: WhatsapplogSchema },
    ]),
  ],
  controllers: [TemplatehitsController],
  providers: [TemplatehitsService],
})
export class TemplatehitsModule {}

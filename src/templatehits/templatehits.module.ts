import { Module } from '@nestjs/common';
import { TemplatehitsController } from './templatehits.controller';
import { TemplatehitsService } from './templatehits.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WhatsappLog, WhatsappLogSchema } from 'src/Schema/whatsapp_log.schema';
import { SmsLog, SmsLogSchema } from 'src/Schema/sms_log.schema';


@Module({
  imports:[MongooseModule.forFeature([{ name: SmsLog.name, schema: SmsLogSchema }]),
          MongooseModule.forFeature([{name: WhatsappLog.name, schema: WhatsappLogSchema}])
],
  controllers: [TemplatehitsController],
  providers: [TemplatehitsService]
})
export class TemplatehitsModule {}

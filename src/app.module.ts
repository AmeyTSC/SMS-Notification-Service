import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WhatsappDevModule } from './whatsapp_dev/whatsapp_dev.module';
import { WhatsappSqsModule } from './whatsapp_sqs/whatsapp_sqs.module';
import { GetwhatsappstatusModule } from './getwhatsappstatus/getwhatsappstatus.module';
import { GupshupmsgrepModule } from './gupshupmsgrep/gupshupmsgrep.module';
import { ResendwhatsappModule } from './resendwhatsapp/resendwhatsapp.module';
import { WhatsappstatusModule } from './whatsappstatus/whatsappstatus.module';
import { SmsSqsModule } from './sms_sqs/sms_sqs.module';
import { SmsTriggerModule } from './sms_trigger/sms_trigger.module';
import { SmsStatuscheckModule } from './sms-statuscheck/sms-statuscheck.module';
import { SmsupdatestatusModule } from './smsupdatestatus/smsupdatestatus.module';
import { SmslogsModule } from './smslogs/smslogs.module';
import { SmslogRagebaseModule } from './smslog_ragebase/smslog_ragebase.module';
import { EmailSqsModule } from './email-sqs/email-sqs.module';
import { TemplatehitsModule } from './templatehits/templatehits.module';
import * as dotenv from 'dotenv';
import { EmailModule } from './email/email.module';
import { EmaillogsModule } from './emaillogs/emaillogs.module';
import { EmailstatuscheckModule } from './emailstatuscheck/emailstatuscheck.module';
import { EmailupdatestatusModule } from './emailupdatestatus/emailupdatestatus.module';
dotenv.config({path: process.cwd() + '/.env'});

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE),SmsSqsModule, SmsTriggerModule, SmsStatuscheckModule, SmsupdatestatusModule, SmslogsModule, SmslogRagebaseModule,TemplatehitsModule, WhatsappDevModule, WhatsappSqsModule,  GetwhatsappstatusModule, GupshupmsgrepModule, ResendwhatsappModule, EmailSqsModule, WhatsappstatusModule,EmailModule, EmailSqsModule, EmaillogsModule, EmailstatuscheckModule, EmailupdatestatusModule ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

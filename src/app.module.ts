import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsSqsModule } from './sms_sqs/sms_sqs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SmsTriggerModule } from './sms_trigger/sms_trigger.module';
import { SmsStatuscheckModule } from './sms-statuscheck/sms-statuscheck.module';
import { SmsupdatestatusModule } from './smsupdatestatus/smsupdatestatus.module';
import { SmslogsModule } from './smslogs/smslogs.module';
import { SmslogRagebaseModule } from './smslog_ragebase/smslog_ragebase.module';
import * as dotenv from 'dotenv';
dotenv.config({path: process.cwd() + '/.env'});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),SmsSqsModule, SmsTriggerModule, SmsStatuscheckModule, SmsupdatestatusModule, SmslogsModule, SmslogRagebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

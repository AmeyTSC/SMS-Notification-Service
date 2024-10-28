import { Module } from '@nestjs/common';
import { SmsStatuscheckController } from './sms-statuscheck.controller';
import { SmsStatuscheckService } from './sms-statuscheck.service';

@Module({
  controllers: [SmsStatuscheckController],
  providers: [SmsStatuscheckService]
})
export class SmsStatuscheckModule {}

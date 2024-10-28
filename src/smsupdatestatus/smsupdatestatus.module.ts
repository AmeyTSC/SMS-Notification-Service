import { Module } from '@nestjs/common';
import { SmsupdatestatusController } from './smsupdatestatus.controller';
import { SmsupdatestatusService } from './smsupdatestatus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SmsHitLog, SmsHitLogSchema } from 'src/Schema/smshit_log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SmsHitLog.name, schema: SmsHitLogSchema }]),
  ],
  controllers: [SmsupdatestatusController],
  providers: [SmsupdatestatusService]
})
export class SmsupdatestatusModule {}

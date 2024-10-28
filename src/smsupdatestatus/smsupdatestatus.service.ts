import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SmsHitLog } from 'src/Schema/smshit_log.schema';

@Injectable()
export class SmsupdatestatusService {
  constructor(
    @InjectModel(SmsHitLog.name) private readonly smsHitLogModel: Model<SmsHitLog>,
  ) {}

  async updateSmsHitLog(sid: string, requestParam: any) {
    if (!sid) {
      throw new HttpException('Missing required query parameter: sid', HttpStatus.BAD_REQUEST);
    }

    const updatedLog = await this.smsHitLogModel.findOneAndUpdate(
      { id: sid },
      { sms_service_response: requestParam },
      { new: true }
    );

    if (!updatedLog) {
      console.log(`No log found for SID: ${sid}`);
      throw new HttpException(`No log found for SID: ${sid}`, HttpStatus.NOT_FOUND);
    }
    return updatedLog;
  }
}

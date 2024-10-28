import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { smsSent } from 'src/utils/sms_send';
import { SmsHitLog } from 'src/Schema/smshit_log.schema';
import { SmsErrorLog } from 'src/Schema/smserror_log.schema';
import { SmsTemplateService } from 'src/utils/sms_template';

@Injectable()
export class SmsTriggerService {
  private readonly logger = new Logger(SmsTriggerService.name);

  constructor(
    @InjectModel(SmsHitLog.name) private readonly smsHitLogModel: Model<SmsHitLog>,
    @InjectModel(SmsErrorLog.name) private readonly smsErrorLogModel: Model<SmsErrorLog>,
    private readonly smstemplateService: SmsTemplateService
  ) {}

  async processSmsSqs(event: any) {
    try {
      const sqsRecord = event.Records[0];
      const requestBody = JSON.parse(sqsRecord.body);
      const data = requestBody.template_attributes;
      this.logger.log('Processing SMS data:', data);

      try {
        const templateInfo = await this.smstemplateService.getsmstemplateDetail(data); 
        const smsResponse = await smsSent(templateInfo);
        await this.createSmsLog(requestBody.template_attributes, smsResponse[0]);
      } catch (error) {
        await this.logSmsError(data.order_id, error.message);
      }
    } catch (error) {
      this.logger.error('Error processing SMS event:', error.message);
    }
  }

  private async createSmsLog(reqObject: any, smsResponse: any) {
    const hitlog = new this.smsHitLogModel({
      id: smsResponse.reqId,
      ...reqObject,
      ...smsResponse,
      trigger_date_and_time: this.getTriggerDateAndTime(),
    });

    try {
      await hitlog.save();
      this.logger.log('SMS hit log created successfully');
    } catch (error) {
      throw new Error(`Failed to log SMS hit: ${error.message}`);
    }
  }

  private async logSmsError(orderId: string, errorMessage: string) {
    const errorLog = new this.smsErrorLogModel({
      id: nanoid(),
      order_id: orderId,
      error: errorMessage,
      date_and_time: this.getTriggerDateAndTime(),
    });

    try {
      await errorLog.save();
      this.logger.log('SMS error log created successfully');
    } catch (error) {
      this.logger.error('Failed to log SMS error:', error.message);
    }
  }

  private getTriggerDateAndTime(): string {
    return new Date(Date.now() + 5.5 * 60 * 60 * 1000).toISOString().replace('Z', '+05:30');
  }
}

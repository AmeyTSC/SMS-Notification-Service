import { Injectable, Logger } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { SmsLog } from 'src/Schema/sms_log.schema';

@Injectable()
export class SmsSqsService {
  private readonly sqs = new AWS.SQS({ region: 'ap-south-1' });
  private readonly queueUrl: string = process.env.SQS_URL_SMS || 'https://sqs.ap-south-1.amazonaws.com/440586161847/sms-createorder-dev';
  private readonly logger = new Logger(SmsSqsService.name);

  constructor(
    @InjectModel(SmsLog.name) private readonly smsLogModel: Model<SmsLog>,
  ) {}

  async sendSmsMessage(templateAttributes: any) {
    const params: AWS.SQS.SendMessageRequest = {
      QueueUrl: this.queueUrl,
      MessageBody: JSON.stringify({ template_attributes: templateAttributes }),
      DelaySeconds: 5,
    };

    try {
      await this.sqs.sendMessage(params).promise();
      await this.logSmsCreation(templateAttributes);
    } catch (error) {
      this.logger.error('Error sending SMS:', error.message);
      throw error;
    }
  }

  private async logSmsCreation(smsResponse: any) {
    const timeAndDate = new Date(Date.now() + 5.5 * 60 * 60 * 1000).toISOString().replace('Z', '+05:30');
    const smsLog = new this.smsLogModel({
      id: nanoid(),
      ...smsResponse,
      timeAndDate,
    });

    try {
      await smsLog.save();
      this.logger.log('SMS log created successfully');
    } catch (error) {
      this.logger.error('Error creating SMS log:', error.message);
      throw error;
    }
  }
}


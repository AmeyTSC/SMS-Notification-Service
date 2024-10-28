import { Injectable, Logger } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class SmsStatuscheckService {
  private readonly sqs: AWS.SQS;
  private readonly queueUrl: string = process.env.SMSREPORT || 'https://sqs.ap-south-1.amazonaws.com/440586161847/sms-report-dev';
  private readonly logger = new Logger(SmsStatuscheckService.name);

  constructor() {
    this.sqs = new AWS.SQS({ region: 'ap-south-1' });
  }

  async sendMessageToSqs(requestparam: Record<string, any>) {
    const params: AWS.SQS.SendMessageRequest = {
      QueueUrl: this.queueUrl,
      MessageBody: JSON.stringify({ requestparam }),
      DelaySeconds: 120,
    };

    try {
      await this.sqs.sendMessage(params).promise();
      this.logger.log('SQS message created successfully');
    } catch (error) {
      this.logger.error('Error sending message to SQS:', error.message);
      throw error;
    }
  }
}

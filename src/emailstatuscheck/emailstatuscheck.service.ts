import { Injectable, Logger } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class EmailstatuscheckService {
    private readonly sqs: AWS.SQS;
  private readonly queueUrl: string = process.env.EMAILREPORT ||
  "https://sqs.ap-south-1.amazonaws.com/440586161847/email-report-dev";
  private readonly logger = new Logger(EmailstatuscheckService.name);

  constructor() {
    this.sqs = new AWS.SQS({ region: 'ap-south-1' });
  }

  async sendMessageToSqs(emailrequestbody: Record<string, any>) {
    const params: AWS.SQS.SendMessageRequest = {
      QueueUrl: this.queueUrl,
      MessageBody: JSON.stringify({ emailrequestbody }),
      DelaySeconds: 120,
    };

    try {
      await this.sqs.sendMessage(params).promise();
      this.logger.log('sqs created successfully');
    } catch (error) {
      this.logger.error('Error sending message to SQS:', error.message);
      throw error;
    }
  }
}

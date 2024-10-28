import { Injectable, Logger } from '@nestjs/common';
import { SQSClient, SendMessageCommand} from '@aws-sdk/client-sqs';
@Injectable()
export class SmsStatuscheckService{
  private sqsClient: SQSClient;
  private QUEUE_URL: string;
  constructor(){
    this.sqsClient = new SQSClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey:
          process.env.AWS_SECERT_KEY,
      },
    });
    this.QUEUE_URL =process.env.SMSREPORT || 'https://sqs.ap-south-1.amazonaws.com/440586161847/sms-report-dev';
  }
  async sendMessageToSqs(requestparam: Record<string, any>){
    const params = {
      QueueUrl: this.QUEUE_URL,
      MessageBody: JSON.stringify({ requestparam }),
      DelaySeconds: 300,
    };
    try{
      const command = new SendMessageCommand(params);
      await this.sqsClient.send(command);
      console.log('SQS message created successfully');
    } catch(error) {
      console.error('Error sending message to SQS:', error.message);
       throw error;
    }
}
}

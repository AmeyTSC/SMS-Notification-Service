import { Injectable, Logger } from '@nestjs/common';
import { SQSClient, SendMessageCommand} from '@aws-sdk/client-sqs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { SmsLog } from 'src/Schema/sms_log.schema';

@Injectable()
export class SmsSqsService {
  private sqsClient: SQSClient;
  private QUEUE_URL: string;

  constructor(
    @InjectModel(SmsLog.name) private readonly smsLogModel: Model<SmsLog>,
  ) {
    this.sqsClient = new SQSClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey:
          process.env.AWS_SECERT_KEY,
      },
    });
    this.QUEUE_URL =process.env.SQS_URL_SMS || 'https://sqs.ap-south-1.amazonaws.com/440586161847/sms-createorder-dev';
  }

  async sendSmsMessage(templateAttributes: any) {
    const params = {
      QueueUrl: this.QUEUE_URL,
      MessageBody: JSON.stringify({ template_attributes: templateAttributes }),
      DelaySeconds: 300,
    };
    try{
      const command = new SendMessageCommand(params);
      await this.sqsClient.send(command); 
      await this.logSmsCreation(templateAttributes);
    }catch(error){
      console.error('Error sending SMS:', error.message);
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
try{
  await smsLog.save();
  console.log('SMS log created successfully');
} catch(error){
  console.error('Error creating SMS log:', error.message);
  throw error;
}
}
}


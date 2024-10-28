import { Injectable, Logger } from '@nestjs/common';
import { SQSClient, SendMessageCommand} from '@aws-sdk/client-sqs';

@Injectable()
export class EmailstatuscheckService {
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
    this.QUEUE_URL =process.env.EMAILREPORT || "https://sqs.ap-south-1.amazonaws.com/440586161847/email-report-dev";
  }

  async sendMessageToSqs(emailrequestbody: Record<string, any>) {
         const params = {
          QueueUrl: this.QUEUE_URL,
           MessageBody: JSON.stringify({ emailrequestbody }),
           DelaySeconds: 120,
        };

        try{
          const command = new SendMessageCommand(params);
          await this.sqsClient.send(command);

      console.log('SQS message created successfully');
        }catch(error){
          console.error('Error sending message to SQS:', error.message);
       throw error;
        }
  }

}

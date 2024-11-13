import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SQSClient, SendMessageCommand} from '@aws-sdk/client-sqs';
import { WhatsappLogService } from '../Services/whatsapp-logcreate.service';
import { Logger } from '@nestjs/common';

@Injectable()
export class WhatsappSqsService {
  private sqsClient: SQSClient;
  private QUEUE_URL: string;
  private readonly logger: Logger = new Logger(WhatsappSqsService.name);

  constructor(
    private readonly whatsappLogService: WhatsappLogService,
  ) {
    this.sqsClient = new SQSClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey:
          process.env.AWS_SECERT_KEY,
      },
    });
    this.QUEUE_URL =process.env.SQS_URL_WHATSAPP;
  }
  // Method to send message to SQS
  async sendMessageToSqs(templateAttributes: any): Promise<any> {
    const params = {
      QueueUrl: this.QUEUE_URL,
      MessageBody: JSON.stringify({ template_attributes: templateAttributes }),
      DelaySeconds: 300, // Delays the message visibility by 5 minutes
    };

    try {
      const command = new SendMessageCommand(params);
      await this.sqsClient.send(command); // Send message to SQS
      await this.whatsappLogService.createLog(templateAttributes);
      this.logger.log('Data creation successfully!')
      return {
        statusCode: 200,
        message: 'Data creation successfully!',
      };
    } catch (error) {
      this.logger.error('Error sending message to SQS:', error.message);
      throw new InternalServerErrorException('Failed to send message')
    }
  }
}

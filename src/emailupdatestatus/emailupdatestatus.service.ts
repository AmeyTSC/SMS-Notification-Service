import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmailHit } from 'src/Schema/email_hits.schema';

@Injectable()
export class EmailupdatestatusService {
  private readonly logger = new Logger(EmailupdatestatusService.name);

  constructor(
    @InjectModel(EmailHit.name) private emailHitModel: Model<EmailHit>,
  ) {}

  async handleEmailReportWebhook(event: any): Promise<void> {
    try {
      const sqsRecord = event.Records[0];
      const requestBody = JSON.parse(sqsRecord.body);
      const emailWebhookResponse = requestBody.emailrequestbody[0];
      const data = emailWebhookResponse.msys.message_event;

      if (!data.transmission_id) {
        this.logger.warn('Missing required query parameter: transmission_id');
        return;
      }

      this.logger.log(`Processing transmission ID: ${data.transmission_id}`);

      await this.emailHitModel.updateOne(
        { id: data.transmission_id },
        { $set: { sparkpost_status: data.type } },
        { upsert: true }  
      );

      this.logger.log('Data processed successfully');
    } catch (error) {
      this.logger.error('Error processing event', error.message);
    }
  }
}

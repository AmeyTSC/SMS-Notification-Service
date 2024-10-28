import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { SmsTriggerService } from './sms_trigger.service';

@Controller('smstrigger')
export class SmsTriggerController {
  constructor(private readonly smstriggerService: SmsTriggerService) {}

  @Post()
  async triggerSms(@Body() event: any) {
    try {
      await this.smstriggerService.processSmsSqs(event);
      return { message: 'SMS processed successfully' };
    } catch (error) {
      throw new HttpException(
        { message: 'An error occurred while processing your request.', details: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

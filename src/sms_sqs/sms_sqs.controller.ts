import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { SmsSqsService } from './sms_sqs.service';

@Controller('send_sms')
export class SmsSqsController {
  constructor(private readonly smssqsService: SmsSqsService) {}

  @Post()
  async sendSms(@Body() body: any) {
    try {
      const { template_attributes } = body;
      await this.smssqsService.sendSmsMessage(template_attributes);
      return {
        statusCode: 200,
        message: "SMS sent successfully",
      };
    } catch (error) {
      throw new HttpException(
        {
          error: "An error occurred while processing your request.",
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}




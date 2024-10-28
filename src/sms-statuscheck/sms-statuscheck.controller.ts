import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { SmsStatuscheckService } from './sms-statuscheck.service';

@Controller('vialogue_sms')
export class SmsStatuscheckController {
  constructor(private readonly smsstatuscheckService: SmsStatuscheckService) {}

  @Get()
  async createSqsMessage(@Query() query: Record<string, any>) {
    try {
      await this.smsstatuscheckService.sendMessageToSqs(query);
      return {
        statusCode: 200,
        message: "SQS message created successfully",
      };
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}


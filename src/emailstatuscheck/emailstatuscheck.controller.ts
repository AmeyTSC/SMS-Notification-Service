import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { EmailstatuscheckService } from './emailstatuscheck.service';

@Controller('emailstatuscheck')
export class EmailstatuscheckController {
    constructor(private readonly emailstatuscheckService: EmailstatuscheckService) {}

  @Get()
  async createSqsMessage(@Query() query: Record<string, any>) {
    try {
      await this.emailstatuscheckService.sendMessageToSqs(query);
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

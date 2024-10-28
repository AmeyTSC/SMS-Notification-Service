import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { SmsupdatestatusService } from './smsupdatestatus.service';

@Controller()
export class SmsupdatestatusController {
  constructor(private readonly smsupdatestatusService: SmsupdatestatusService) {}

  @Post()
  async handleSqsEvent(@Body() body: any) {
    try {
      const sqsRecord = body.Records[0];
      const requestBody = JSON.parse(sqsRecord.body);
      const sid = requestBody.requestparam.sid;

      if (!sid) {
        console.log("Missing required query parameter: sid");
        throw new HttpException('Missing required query parameter: sid', HttpStatus.BAD_REQUEST);
      }

      await this.smsupdatestatusService.updateSmsHitLog(sid, requestBody.requestparam);
      console.log('SMS log updated successfully');
    } catch (error) {
      console.error("Error processing event:", error.message);
      throw new HttpException('Error processing event', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

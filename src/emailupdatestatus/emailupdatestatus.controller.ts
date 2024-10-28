import { Controller, Post, Req } from '@nestjs/common';
import { EmailupdatestatusService } from './emailupdatestatus.service';

@Controller('email-report')
export class EmailupdatestatusController {
  constructor(private readonly emailupdatestatusService: EmailupdatestatusService) {}

  @Post()
  async handleEmailReportWebhook(@Req() req): Promise<void> {
    await this.emailupdatestatusService.handleEmailReportWebhook(req.body);
  }
}

import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { EmaillogsService } from './emaillogs.service';
import { EmailRangeLogService } from 'src/Services/email_rangelogs.service';

@Controller('emaillogs')
export class EmaillogsController {
  constructor(
    private readonly emaillogsService: EmaillogsService,
    private readonly emailrangelog: EmailRangeLogService,
  ) {}

  @Get()
  async emaillogs(@Query('created_at') createdAt: string, @Res() res: Response) {
    try {
      const data = await this.emaillogsService.emaillogs(createdAt);
      return res.status(200).json(data);
    } catch (err) {
      console.error('Failed to fetch data', err);
      return res.status(500).json({
        message: 'Failed to fetch data',
        error: err.message,
      });
    }
  }

  @Get('range')
  async getLogsInRange(
    @Query('start_date') startDate: string,
    @Query('end_date') endDate: string,
    @Res() res: Response,
  ) {
    try {
      const result = await this.emailrangelog.getLogsInRange(startDate, endDate);
      return res.status(200).json({
        status: 200,
        result,
      });
    } catch (error) {
      console.error('Failed to fetch logs in range', error);
      return res.status(500).json({
        message: 'Failed to fetch logs in range',
        error: error.message,
      });
    }
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { SmslogsService } from './smslogs.service';

@Controller('smslogs')
export class SmslogsController {
    constructor(private smslogsService : SmslogsService){}

    @Get()
async smsreport(@Query('createdAt') createdAt: string) {
    return this.smslogsService.smsreport(createdAt);
}
}


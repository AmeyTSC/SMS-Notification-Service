import { Controller, Get, Query } from '@nestjs/common';
import { SmslogRagebaseService } from './smslog_ragebase.service';


@Controller('smslog_ragebase')
export class SmslogRagebaseController {
    constructor(private smslogragebaseservice : SmslogRagebaseService){}

    @Get('smsrangelogs')
    async smsranageLogs(
        @Query('start_date') start_date: string,
        @Query('end_date') end_date: string,
    ) {
        return this.smslogragebaseservice.smsranageLogs(start_date, end_date);
    }

}


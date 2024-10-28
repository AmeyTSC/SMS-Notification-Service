import { Controller, Get, Query , Res} from '@nestjs/common';
import { Response } from 'express';
import { EmaillogsService } from './emaillogs.service';

@Controller('emaillogs')
export class EmaillogsController {
    constructor(private readonly emaillogsService: EmaillogsService){}
    @Get('report')
    async emaillogs(@Query('created_at') createdAt: string, @Res() res: Response) {
      try {
         const data = await this.emaillogsService.emaillogs(createdAt);
         return res.status(200).json(data);
       } catch (err) {
         console.error('Failed to fetch data', err);
         return {
            statusCode : 500,
            body: JSON.stringify({
               message: "Failed to fetch data",
               error: err.message,
            })
         }
       }
    }
}

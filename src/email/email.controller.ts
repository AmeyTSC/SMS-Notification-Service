import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { EmailService } from './email.service';
import { emailLogs} from 'src/Schema/email_logs.schema';


@Controller('email')
export class EmailController {
 constructor(private readonly emailservice: EmailService
 ){}
 
 @Post('send')
 async emailSend(@Body() body: {template_attributes: emailLogs}) {
    return await this.emailservice.emailSend(body.template_attributes);
 }

}

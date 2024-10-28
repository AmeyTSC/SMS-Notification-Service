import { Body, Controller, Post } from '@nestjs/common';
import { SqsEmailService } from './sqs_email.service';

@Controller('sqs-email')
export class SqsEmailController {
    constructor(  private readonly sqsemailService : SqsEmailService){}
    @Post('sendtosqs')
 async sendEmail(@Body('template_attributes') templateAttributes: any) {
   const response =  await this.sqsemailService.emailTrigger(templateAttributes);
   return response;
 }
}

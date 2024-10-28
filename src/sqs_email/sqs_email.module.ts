import { Module } from '@nestjs/common';
import { SqsEmailController } from './sqs_email.controller';
import { SqsEmailService } from './sqs_email.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailLogSchema } from 'src/Schema/email_logs.schema';

import { EmailTemplatesService } from 'src/utils/email_templates';
import { EmailHitSchema } from 'src/Schema/email_hits.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:'emailLogs' , schema: EmailLogSchema},{name: 'EmailHitLog', schema: EmailLogSchema}])],
  controllers: [SqsEmailController],
  providers: [SqsEmailService, EmailTemplatesService]
})
export class SqsEmailModule {}

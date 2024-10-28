import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailTemplatesService } from 'src/utils/email_templates';

import { emailsparkpost } from 'src/utils/email_send';

import { emailLogs, EmailLogSchema } from 'src/Schema/email_logs.schema';
import { EmailHitSchema } from 'src/Schema/email_hits.schema';
@Module({
    imports: [MongooseModule.forFeature([{name:'emailLogs' , schema: EmailLogSchema}, {name: 'EmailHitLog', schema: EmailHitSchema}])],
    controllers: [EmailController],
    providers: [EmailService, EmailTemplatesService, emailsparkpost]
})
export class EmailModule {}

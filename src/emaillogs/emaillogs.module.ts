import { Module } from '@nestjs/common';
import { EmaillogsController } from './emaillogs.controller';
import { EmaillogsService } from './emaillogs.service';
import { EmailTemplatesService } from 'src/utils/email_templates';
import { emailsparkpost } from 'src/utils/email_send';
import { MongooseModule } from '@nestjs/mongoose';
import { emailLogs, EmailLogSchema } from 'src/Schema/email_logs.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'emailLogs', schema: EmailLogSchema}])],
  controllers: [EmaillogsController],
  providers: [EmaillogsService, EmailTemplatesService,emailsparkpost]
})
export class EmaillogsModule {}

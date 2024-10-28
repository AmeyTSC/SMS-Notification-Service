import { Module } from '@nestjs/common';
import { EmaillogsController } from './emaillogs.controller';
import { EmaillogsService } from './emaillogs.service';
import { EmailTemplatesService } from 'src/utils/email_templates';
import { emailsparkpost } from 'src/utils/email_send';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailLogSchema } from 'src/Schema/email_logs.schema';
import { EmailHitSchema } from 'src/Schema/email_hits.schema';
import { EmailRangeLogService } from 'src/Services/email_rangelogs.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'emailLogs', schema: EmailLogSchema}]),
MongooseModule.forFeature([{name:'EmailHit',schema:EmailHitSchema}])],
  controllers: [EmaillogsController],
  providers: [EmaillogsService, EmailTemplatesService,emailsparkpost,EmailRangeLogService]
})
export class EmaillogsModule {}

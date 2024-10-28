import { Module } from '@nestjs/common';
import { EmailupdatestatusController } from './emailupdatestatus.controller';
import { EmailupdatestatusService } from './emailupdatestatus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailHitSchema } from 'src/Schema/email_hits.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: 'EmailHit', schema: EmailHitSchema}])],
  controllers: [EmailupdatestatusController],
  providers: [EmailupdatestatusService]
})
export class EmailupdatestatusModule {}

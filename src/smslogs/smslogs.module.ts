import { Module } from '@nestjs/common';
import { SmslogsController } from './smslogs.controller';
import { SmslogsService } from './smslogs.service';
import { SmsHitLogSchema } from 'src/Schema/smshit_log.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'SmsHitLog', schema: SmsHitLogSchema}])],
  controllers: [SmslogsController],
  providers: [SmslogsService]
})
export class SmslogsModule {}

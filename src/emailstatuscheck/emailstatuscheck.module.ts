import { Module } from '@nestjs/common';
import { EmailstatuscheckController } from './emailstatuscheck.controller';
import { EmailstatuscheckService } from './emailstatuscheck.service';

@Module({
  controllers: [EmailstatuscheckController],
  providers: [EmailstatuscheckService]
})
export class EmailstatuscheckModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WhatsAppHitLog } from 'src/Schema/whatsapp_hits.schema';

@Injectable()
export class WhatsappRangeLog {
  constructor(
    @InjectModel(WhatsAppHitLog.name)
    private whatsapphit: Model<WhatsAppHitLog>,
  ) {}

 async getLogsInRange(startDate: string, endDate: string):Promise<any>{
    if (!startDate || !endDate) {
      throw new Error("Please provide both 'start_date' and 'end_date' parameters.");
    }

    const start = new Date(`${startDate}T00:00:00.000+05:30`);
    const end = new Date(`${endDate}T23:59:59.999+05:30`);

    const logs = await this.whatsapphit.find({
      created_at: { $gte: start, $lte: end },
    }).lean();

    let result = {};

    logs.forEach((log) => {
      const date = log.created_at.split('T')[0];
      if (!result[date]) {
        result[date] = {
          totalhits: 0,
          orderReceiveTemplate: this.initializeTemplateStats(),
          shippedTemplate: this.initializeTemplateStats(),
          deliveredTemplate: this.initializeTemplateStats(),
          orderReceiveEdd: this.initializeTemplateStats(),
          installationNotification: this.initializeTemplateStats(),
        };
      }

      const templateStats = result[date][log.templateName] || this.initializeTemplateStats();

      templateStats.hitcount++;
      if (log.success_status === 'Yes') templateStats.success++;
      if (log.sent_status === 'Yes') templateStats.sent++;
      if (log.read_status === 'Yes') templateStats.read++;
      if (log.other_status === 'Yes') templateStats.other++;
      if (log.unknownSubscriber_status === 'Yes') templateStats.unknown_subscriber++;
      if (log.deferred_status === 'Yes') templateStats.deferred++;
      if (log.blockedForUser_status === 'Yes') templateStats.blocked_for_user++;
      if (log.twentyFourHourExceeded_status === 'Yes') templateStats.hour_exceeded++;

      result[date].totalhits++;
      result[date][log.templateName] = templateStats;
    });

    return { logs,result};
  }

  private initializeTemplateStats() {
    return {
      hitcount: 0,
      success: 0,
      sent: 0,
      read: 0,
      other: 0,
      unknown_subscriber: 0,
      deferred: 0,
      blocked_for_user: 0,
      hour_exceeded: 0,
    };
  }
}

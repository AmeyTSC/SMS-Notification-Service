import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmailHit } from '../Schema/email_hits.schema';

@Injectable()
export class EmailRangeLogService {
  constructor(
    @InjectModel(EmailHit.name)
    private readonly emailHitModel: Model<EmailHit>,
  ) {}

  async getLogsInRange(startDate: string, endDate: string): Promise<any> {
    if (!startDate || !endDate) {
      throw new BadRequestException("Please provide both 'start_date' and 'end_date' parameters.");
    }

    const start = new Date(`${startDate}T00:00:00.000+05:30`);
    const end = new Date(`${endDate}T23:59:59.999+05:30`);

    const logs = await this.emailHitModel
      .find({
        created_at: { $gte: start, $lte: end },
      })
      .lean();

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
      if (log.sparkpost_status === 'bounce') templateStats.bounce++;
      if (log.sparkpost_status === 'delivery') templateStats.delivery++;
      if (log.sparkpost_status === 'injection') templateStats.injection++;
      if (log.sparkpost_status === 'delay') templateStats.delay++;

      result[date].totalhits++;
      result[date][log.templateName] = templateStats;
    });

    return { logs, result };
  }

  private initializeTemplateStats() {
    return {
      hitcount: 0,
      bounce: 0,
      delivery: 0,
      injection: 0,
      delay: 0,
    };
  }
}

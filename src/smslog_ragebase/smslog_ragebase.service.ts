import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SmsHitLog } from 'src/Schema/smshit_log.schema';
@Injectable()
export class SmslogRagebaseService {
  constructor(@InjectModel('SmsHitLog') private SmsHitLogModel: Model<SmsHitLog>) {}
  initializeTemplateStats() {
    return {
      hitcount: 0,
      success: 0,
      fail: 0,
    };
  }

  async smsranageLogs(start_date: string, end_date: string) { 
    
    if (!start_date || !end_date) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Please provide both 'start_date' and 'end_date' parameters.",
        }),
      };
    }

    try {
      const startDateString = `${start_date}T00:00:00.000Z`;
        const endDateString = `${end_date}T23:59:59.999Z`;
      
      const items = await this.SmsHitLogModel.find({
        created_at: {
            $gte: startDateString,
            $lte: endDateString,
        },
    }).exec();

      //console.log('Fetched items:' , items);
      let result = this.processLogs(items);

      return {
        statusCode: 200,
          items,
          result,
      };
    } catch (error) {
      console.error('Error fetching logs:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal server error' }),
      };
    }
  }

  processLogs(items: any[]) {
    let result: any = {};

    items.forEach((el) => {
      const date = new Date(el.created_at).toISOString().split('T')[0];

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

      result[date].totalhits++;

      const templateStats = result[date][el.templateName];

      if (templateStats) {
        templateStats.hitcount++;
        if (el.sms_service_response?.reason === 'DELIVRD') {
          templateStats.success++;
        } else {
          templateStats.fail++;
        }
      } else{
        console.log(`Unknown template: ${el.templateName} from date: ${date}`);
      }
    });

    return result;
  }
}

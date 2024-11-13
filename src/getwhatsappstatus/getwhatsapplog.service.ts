import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { whatsapp_logs } from 'src/Schema/whatsapp_logs.schema';

@Injectable()
export class GetWhatsappLog {
  constructor(
    @InjectModel(whatsapp_logs.name)
    private whatsappLogModel: Model<whatsapp_logs>,
  ) {}

  async getwhatsapplogs(createdAt: string) {
    //  console.log(createdAt);
    if (!createdAt) {
        throw new Error("Please provide the 'created_at' parameter.");
      }

      const filter = { created_at: { $regex: createdAt, $options: 'i' } };

      const items = await this.whatsappLogModel.find(filter).exec();

      // Counters
      let totalTemplates = {
        orderReceiveTemplate: 0,
        shippedTemplate: 0,
        invoiceTemplate: 0,
        orderReceiveEdd: 0,
      };
      let successCounts = { ...totalTemplates };
      let errorCounts = { ...totalTemplates };
      let sentCounts = 0;
      let readCounts = 0;
      let successCountsStatus = 0;
      let errorCount = 0;

      // Counting logic
      items.forEach((item) => {
        if (totalTemplates[item.templateName] !== undefined) {
          totalTemplates[item.templateName]++;
        }

        if (item.status === 'success') {  
          successCounts[item.templateName]++;
        } else {
          errorCounts[item.templateName]++;
        }

        if (item.sent_status === 'yes') sentCounts++; 
        if (item.read_status === 'yes') readCounts++; 
        if (item.success_status === 'yes') successCountsStatus++; 

        if (
          item.other_status === 'yes' || 
          item.twentyFourHourExceeded_status === 'yes' || 
          item.unknownSubscriber_status === 'yes' || 
          item.deferred_status === 'yes' || 
          item.blockedForUser_status === 'yes' 
        ) {
          errorCount++;
        }
      });

      return {
        items,
        totalTemplates,
        successCounts,
        errorCounts,
        sentCounts,
        readCounts,
        successCountsStatus,
        errorCount,
        totalHits: items.length,
      };
  }
}

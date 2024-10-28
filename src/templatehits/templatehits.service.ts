import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SmsLog } from 'src/Schema/sms_log.schema';
import {  WhatsappLog } from 'src/Schema/whatsapp_log.schema';

@Injectable()
export class TemplatehitsService {
  constructor(
    @InjectModel(SmsLog.name) private readonly smsLogModel: Model<SmsLog>,
    @InjectModel(WhatsappLog.name) private readonly WhatsappLogModel: Model<WhatsappLog>,
  ) {}

  async getTemplateHits(phoneNumbers: string[], attribute_name: string, type: string) {
    const model = type === 'whatsapp' ? this.WhatsappLogModel : this.smsLogModel;
    const notFoundNumbers: string[] = [];
    const allItems = [];


    for (const phoneNo of phoneNumbers) {
        let items;
    
        if (type === 'whatsapp') {
          items = await this.WhatsappLogModel.find({
            [attribute_name]: { $regex: phoneNo, $options: 'i' },
          }).exec();
        } else {
          items = await this.smsLogModel.find({
            [attribute_name]: { $regex: phoneNo, $options: 'i' },
          }).exec();
        }
    
        if (items.length > 0) {
          allItems.push(...items);
        } else {
          notFoundNumbers.push(phoneNo);
        }
      }
    


    return { data: allItems, notFound: notFoundNumbers };
  }
}


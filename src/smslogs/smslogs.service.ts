import { Injectable } from '@nestjs/common';
 import { InjectModel } from '@nestjs/mongoose';
 import { Model } from 'mongoose';
 import { SmsHitLog } from 'src/Schema/smshit_log.schema';

 @Injectable()
 export class SmslogsService {
     constructor(@InjectModel('SmsHitLog') private SmsHitLogModel: Model<SmsHitLog> ){}
      
     private initializeTemplateStats() {
        return {
            hitcount: 0,
            success: 0,
            fail: 0,
        }
    }
     async smsreport(createdAt: string){
         const stats = {
             orderReceiveTemplate : this.initializeTemplateStats(),
             shippedTemplate : this.initializeTemplateStats(),
             deliveredTemplate: this.initializeTemplateStats(),
             orderReceiveEdd: this.initializeTemplateStats(),
             installationNotification : this.initializeTemplateStats(),
         };
         const items = await this.SmsHitLogModel.find({ created_at: {$regex: createdAt}})
         .exec();
         
         items.forEach((el) => {  
             const templateName = el.templateName;
             console.log('Processing template:', templateName)
             const templateStats = stats[templateName] || this.initializeTemplateStats();
             templateStats.hitcount++;
             
            if(el?.sms_service_response?.reason === "DELIVRD") {
                templateStats.success++ 
             } else {
                 templateStats.fail++;
             }
             stats[templateName] = templateStats;
         });
         return {
             statusCode: 200,
            body: {result : stats},
         };
     };
 };

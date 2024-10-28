import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmailTemplatesService } from 'src/utils/email_templates';
import { emailLogs } from 'src/Schema/email_logs.schema';
import { emailsparkpost } from 'src/utils/email_send';

@Injectable()
export class EmaillogsService {
    constructor(@InjectModel('emailLogs') private EmailLogModel : Model<emailLogs>,
    private readonly emailTemplatesService: EmailTemplatesService,
     private readonly Emailsparkpost : emailsparkpost,
) {}

async emaillogs(createdAt: string) {
    if(!createdAt){
      return{
          statusCode: 400,
          body: JSON.stringify({
              message: 
              "Please provide the 'created_at' parameter in the query string"
          })
      }
    };
  
    let items = [];
    let totalCounts = {
      orderReceiveTemplate: 0,
      invoiceTemplate: 0,
      deliveredTemplate: 0,
      orderReceiveEdd: 0,
    };
  
    let successCounts = {...totalCounts};
    let errorCounts = {...totalCounts};
  
    const logs = await this.EmailLogModel.find({
      created_at: { $regex: createdAt }, // Regex match for created_at
    }).exec();
   
    for(const item of logs){
      const templateName = item.templateName || "unknown";
      const totalRejectedRecipients =
            item.email_response?.results?.total_rejected_recipients || "0";
          const totalRejected = parseInt(totalRejectedRecipients, 10);
          totalCounts[templateName] = (totalCounts[templateName] || 0);
  
          let email_status = "FAIL";
          if(totalRejected === 0){
            email_status = "success";
            successCounts[templateName] = (successCounts[templateName] || 0) + 1;
          } else{
              errorCounts[templateName] = (errorCounts[templateName] || 0) + 1;
          }
  
          items.push({
              order_id: item.order_id,
              id:item.id,
              phoneNo:item.phoneNo,
              templateName: item.templateName,
              email_status: email_status,
          })
       
    }
   return {
      statusCode: 200,
          items: items,
          total_hits: items.length,
          totalCounts,
          successCounts,
          errorCounts
      ,
   };
    
  
  }
}

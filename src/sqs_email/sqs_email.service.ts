import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { EmailHit} from 'src/Schema/email_hits.schema';
import { emailLogs } from 'src/Schema/email_logs.schema';
import { emailsparkpost } from 'src/utils/email_send';
import { EmailTemplatesService } from 'src/utils/email_templates';
import { getorderEdd } from 'src/utils/getorderedd';
import { getproductimage } from 'src/utils/productimage';

@Injectable()
export class SqsEmailService {
    constructor(
        @InjectModel(emailLogs.name) private readonly EmailLogModel: Model<emailLogs>,
        @InjectModel(EmailHit.name) private readonly EmailHitLogModel:Model<EmailHit>, 
        readonly emailtemplateService: EmailTemplatesService){}

        async emailTrigger(event:any) {
            try {
                const sqsRecord = event.Records[0];
                const emaildata = JSON.parse(sqsRecord.body);
                const requestBody = emaildata.template_attributes;
            
                if (requestBody.templateName === "orderReceiveTemplate") {
                  await Promise.all(
                    requestBody.productsData.map(async (el) => {
                      try {
                        const image = await getproductimage(el.product_id, el.variant_id);
                        el.image = image || null;
                      } catch (error) {
                        el.image = null;
                        await this.email_log_creation(requestBody.order_id, error.message);
                      }
                    })
                  );
            
                  let responseEDD:any = {};
                  try {
                    responseEDD = await getorderEdd(requestBody.shopify_id);
                  } catch (error) {
                    await this.email_log_creation(requestBody.order_id, error.message);
                  }
            
                  if (responseEDD && responseEDD.metafields && responseEDD.metafields.length) {
                    try {
                      const metafieldValue = JSON.parse(responseEDD.metafields[0].value);
                      const { edd_min, edd_max } = metafieldValue.orderEDD;
                      requestBody.dateRange = {
                        start: dataFormation(edd_min),
                        end: dataFormation(edd_max),
                      };
                    } catch (error) {
                      requestBody.templateName = "orderReceiveEdd";
                      await this.email_log_creation(requestBody.order_id, error.message);
                    }
                  } else {
                    requestBody.templateName = "orderReceiveEdd";
                  }
                }
            
                try {
                  const templateInfo = await this.emailtemplateService.emailtemplateDetail(requestBody);
                  const emailResponse = new emailsparkpost();
                  await this.emailhit_logs(requestBody, emailResponse);
                  console.log("Email template info retrieved successfully");
                } catch (error) {
                  await this.email_log_creation(requestBody.order_id, error.message);
                }
              } catch (error) {
                console.error("Error processing event:", error.message);
              }
        }

        private async email_log_creation(email_response,template_attributes) {
            const {partMessageIds, totalMessageParts, ...cleanedSmsResponse} = email_response;
            const emaillog = new this.EmailLogModel({
                id: nanoid(),
            ...cleanedSmsResponse,
            ...template_attributes,
            created_at: new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000)
                .toISOString()
                .replace("Z", "+05:30"),
            });
        
           try{
            await emaillog.save();
           } catch(error){
            throw error;
           } 
        }

        private async emailhit_logs(reqObject: any, email_response:any) {
            const date_and_time = () => {
                return new Date(Date.now() + 5.5 * 60 * 60 * 1000)
                  .toISOString()
                  .replace("Z", "+05:30");
              };
        
              const emailhitlog = new this.EmailHitLogModel({
                id: email_response.results.id,
                ...reqObject,
                ...email_response.results,
                trigger_date_and_time: date_and_time(),
              });
        
              try{
                await emailhitlog.save();
              }catch(error){
                throw new Error(`Failed to log Email hit: ${error.message}`);
              }
        }
}

function dataFormation(inputData) {
    if (!inputData) return null;
    const cleanedText = inputData.replace(/<\/?sup>/g, "");
    const match = cleanedText.match(/\b\d{1,2}(st|nd|rd|th)\s[a-zA-Z]+\b/g);
    return match ? match[0] : null;
  }

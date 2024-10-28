import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { EmailTemplatesService } from 'src/utils/email_templates';
import { emailLogs } from 'src/Schema/email_logs.schema';
import { emailsparkpost } from 'src/utils/email_send';

@Injectable()
export class EmailService {
    constructor(@InjectModel(emailLogs.name) private EmailLogModel : Model<emailLogs>,
     private readonly emailTemplatesService: EmailTemplatesService,
     private readonly Emailsparkpost : emailsparkpost,
){}
    async emailSend(templateAttributes: any){
        try{
             const templateInfo = await this.emailTemplatesService.emailtemplateDetail(templateAttributes);
            const sparkpostresponse = await this.Emailsparkpost.emailsparkpost(templateInfo);
            

            const newemailLog = new this.EmailLogModel({
                id: nanoid(),
                ...templateInfo,
                ...templateAttributes,
                email_response: sparkpostresponse,
                created_at: new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000)
                .toISOString()
                .replace("Z", "+05:30"),
            })

             await newemailLog.save();

             return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "Email sent successfully",
                }),
             };

        }catch(error){
            console.log("Error processing email send request:" , error);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: "An error occurred while processing your request.",
                    deatils: error.message,
                }),
            };
        }
    }
};

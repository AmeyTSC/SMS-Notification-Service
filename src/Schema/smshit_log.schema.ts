import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types, Schema as MongooseSchema } from "mongoose";


@Schema()

export class SmsHitLog extends Document {
    @Prop()
    awbNo: string;

    @Prop()
    code: number;

    @Prop()
    created_at : string;

    @Prop()
    desc: string;

    @Prop()
    orderId: string;

    @Prop()
    partMessageIds: string[];

    @Prop()
    phoneNo: string;

    @Prop()
    reqId: string;

    @Prop()
    templateName: string;

    @Prop()
    time: string;

    
    @Prop()
    totalMessageParts: number;

    @Prop()
    trigger_date_and_time: string;
    // @Prop({type: Object})
    // smsResponse: Record<string, any>;


     @Prop()
     id: string;
    
    
     @Prop({type: Object, default:{}})
     template_attributes: Record<string, any>;

    // @Prop({type: SMS_Template})
    // smsTemplate: SMS_Template;


    @Prop({ type: Object})
    sms_service_response: {
        custref: string;
        dest: string;
        dtime: string;
        reason: string;
        sid: string;
        status: string;
        stime: string;

    };
    //Record<string, any>
     @Prop({type: Object, required:true})
     _id: string;

    @Prop()
    customerName: string;

}


export const SmsHitLogSchema = SchemaFactory.createForClass(SmsHitLog);
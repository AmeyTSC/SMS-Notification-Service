import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SmsLog extends Document {
 
@Prop()
created_at: string;

@Prop()
  customerName: string;

  @Prop()
  orderId: string;

  @Prop()
  phoneNo: string;

  @Prop({required: true})
  templateName: string;

  // @Prop()
  // awbNo: string;

  @Prop()
  timeAndDate: string;

  @Prop({ type: Object})
  requestparam: Record<string, any>;


  @Prop({type: Object})
  sms_response: Record<string, any>

}

export const SmsLogSchema = SchemaFactory.createForClass(SmsLog);

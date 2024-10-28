import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


@Schema()

export class SmsErrorLog extends Document {
    @Prop()
    orderId: string;

    @Prop()
    error: string;

    @Prop()
    date_and_time: string;
    
    @Prop({ type: Types.ObjectId,  auto: true}) // Use Types.ObjectId
    _id: Types.ObjectId;
}

export const SmsErrorLogSchema = SchemaFactory.createForClass(SmsErrorLog);
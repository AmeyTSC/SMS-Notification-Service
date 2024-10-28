import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsTemplateService {
  constructor() {}

  async getsmstemplateDetail(template_attributes:any){
    const {
      phoneNo = '',
      customerName = '',
      orderId = '',
      templateName = '',
      awbNo = '',
    } = template_attributes;

    // const newtemplate = new this.sms_templateModel({
    //   phoneNo,
    //   customerName,
    //   orderId,
    //   templateName,
    //   awbNo,
    // });
    const phoneNumber = phoneNo ? phoneNo.slice(-10) : undefined;

    const tracklink = `https://thesleepcompany.in/account/login?return_url=%2Faccount%23view=${orderId}`;

    const SMSTemplate = {
      orderReceiveTemplate: {
        method: "post",
        maxBodyLength: Infinity,
        url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! Your The Sleep Company order ${orderId} is placed! Click to track: ${tracklink} For queries email us at care@thesleepcompany.in&entityid=1201159317126206525&templateid=1707172794146127988`,
        headers: {},
      },
      orderReceiveEdd: {
        method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! Your The Sleep Company order ${orderId} is placed! We'll share the tracking link when shipped. Details:\nhttps://thesleepcompany.in/account%23view=orders\nQueries: care@thesleepcompany.in&entityid=1201159317126206525&templateid=1707172258526174945`,
    headers: {},
      },
      shippedTemplate: {
        method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! Your The Sleep Company order ${orderId} is shipped! Click to track: ${tracklink} For queries, email care@thesleepcompany.in&entityid=1201159317126206525&templateid=1707172794191652424`,
    headers: {},
      },   
      deliveredTemplate: {
        method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Time to celebrate! Your The Sleep Company order ${orderId} has successfully been delivered! Click for more details: ${tracklink}&entityid=1201159317126206525&templateid=1707172794158996245`,
    headers: {},
      },
      cashandcarryTemplate: {
        method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! Your The Sleep Company order ${orderId} is placed! Thank you for choosing us ! For queries email us at care@thesleepcompany.in\n&entityid=1201159317126206525&templateid=1707172794215721551`,
    headers: {},
      },
    };

    try {
      return SMSTemplate[templateName];
    } catch (error) {
      throw new Error(`Failed to save template": ${error.message}`);
    };
  }
}
